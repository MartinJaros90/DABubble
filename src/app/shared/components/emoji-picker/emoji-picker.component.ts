import {
  Component,
  EventEmitter,
  Output,
  HostListener,
  ViewEncapsulation,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  EmojiCategory,
  emojiCategories,
  emojiDescriptions,
  categoryDescriptions,
} from './emoji-categories';

@Component({
  selector: 'app-emoji-picker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmojiPickerComponent implements OnInit {
  @Output() emojiSelected = new EventEmitter<string>();
  @Output() closeEmojiPicker = new EventEmitter<void>();
  @Input() triggerPosition = { x: 0, y: 0 };
  @Input() multiSelect = true;

  pickerPosition = { x: 0, y: 0 };
  selectedCategory = 'recent';
  searchQuery = '';
  filteredEmojis: string[] = [];
  isClosing = false;
  recentEmojis: string[] = [];
  selectedEmojis: string[] = [];
  private readonly RECENT_EMOJI_KEY = 'dabubble_recent_emojis';
  private readonly MAX_RECENT_EMOJIS = 20;

  categories: EmojiCategory[] = emojiCategories;

  constructor() {}

  ngOnInit() {
    this.loadRecentEmojis();
    this.positionPickerBasedOnTrigger();
    this.selectCategory(this.recentEmojis.length > 0 ? 'recent' : 'people');
  }

  positionPickerBasedOnTrigger() {
    // Abmessungen des Bildschirms
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Abmessungen des Emoji-Pickers (geschätzt, könnte dynamisch ermittelt werden)
    const pickerWidth = 320;
    const pickerHeight = 350;

    // Berechnung der mittigen Position
    const posX = (windowWidth - pickerWidth) / 2;
    const posY = (windowHeight - pickerHeight) / 2;

    // Position setzen
    this.pickerPosition = { x: posX, y: posY };
  }

  loadRecentEmojis() {
    try {
      const saved = localStorage.getItem(this.RECENT_EMOJI_KEY);
      if (saved) {
        this.recentEmojis = JSON.parse(saved);
      } else {
        this.recentEmojis = [];
      }
    } catch (error) {
      console.error('Fehler beim Laden der zuletzt verwendeten Emojis:', error);
      this.recentEmojis = [];
    }
  }

  saveRecentEmojis() {
    try {
      localStorage.setItem(
        this.RECENT_EMOJI_KEY,
        JSON.stringify(this.recentEmojis)
      );
    } catch (error) {
      console.error(
        'Fehler beim Speichern der zuletzt verwendeten Emojis:',
        error
      );
    }
  }

  addToRecentEmojis(emoji: string) {
    this.recentEmojis = this.recentEmojis.filter((e) => e !== emoji);

    this.recentEmojis.unshift(emoji);

    if (this.recentEmojis.length > this.MAX_RECENT_EMOJIS) {
      this.recentEmojis = this.recentEmojis.slice(0, this.MAX_RECENT_EMOJIS);
    }

    const recentCategory = this.categories.find((c) => c.name === 'recent');
    if (recentCategory) {
      recentCategory.emojis = [...this.recentEmojis];
    }

    this.saveRecentEmojis();
  }

  selectCategory(categoryName: string) {
    this.selectedCategory = categoryName;
    this.searchQuery = '';

    if (categoryName === 'recent') {
      this.filteredEmojis = [];
    } else {
      this.updateFilteredEmojis();
    }
  }

  filterEmojis() {
    this.updateFilteredEmojis();
  }

  updateFilteredEmojis() {
    if (this.searchQuery && this.searchQuery.trim() !== '') {
      const searchTerm = this.searchQuery.toLowerCase().trim();
      const allEmojis: string[] = [];

      this.categories.forEach((c) => {
        if (c.name !== 'recent') {
          allEmojis.push(...c.emojis);
        }
      });

      this.filteredEmojis = this.filterEmojisBySearchTerm(
        allEmojis,
        searchTerm
      );
    } else {
      const category = this.categories.find(
        (c) => c.name === this.selectedCategory
      );
      this.filteredEmojis = category ? category.emojis : [];
    }
  }

  private filterEmojisBySearchTerm(
    emojis: string[],
    searchTerm: string
  ): string[] {
    return emojis.filter((emoji) => {
      const specificTags = emojiDescriptions[emoji] || [];

      let emojiCategory = '';
      for (const cat of this.categories) {
        if (cat.emojis.includes(emoji)) {
          emojiCategory = cat.name;
          break;
        }
      }

      const categoryTags = categoryDescriptions[emojiCategory] || [];

      const allTags = [...specificTags, ...categoryTags];

      return allTags.some((tag) => tag.includes(searchTerm));
    });
  }

  addEmoji(emoji: string, event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }

    this.addToRecentEmojis(emoji);

    if (!this.selectedEmojis.includes(emoji)) {
      this.selectedEmojis.push(emoji);
    }

    this.emojiSelected.emit(emoji);

    if (!this.multiSelect) {
      this.close();
    }
  }

  close() {
    if (this.isClosing) return;
    this.isClosing = true;
    setTimeout(() => {
      this.closeEmojiPicker.emit();
    }, 150);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedElement = event.target as HTMLElement;
    const isEmojiPickerClick =
      clickedElement.closest('.emoji-picker-wrapper') !== null;
    const isEmojiTriggerClick =
      clickedElement.closest('[data-emoji-trigger]') !== null;

    if (!isEmojiPickerClick && !isEmojiTriggerClick) {
      this.close();
    }
  }

  @HostListener('document:keydown.escape')
  onEscapePress() {
    this.close();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.positionPickerBasedOnTrigger();
  }
}
