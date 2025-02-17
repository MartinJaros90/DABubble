import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-emoji-picker',
  imports: [CommonModule],
  templateUrl: './emoji-picker.component.html',
  styleUrl: './emoji-picker.component.scss',
})
export class EmojiPickerComponent {
  @Output() emojiSelected = new EventEmitter<string>();
  @Output() closeEmojiPicker = new EventEmitter<void>();
  isClosing = false;

  private readonly RECENT_KEY = 'recent_emojis';
  recentEmojis = signal<string[]>([]);

  constructor() {
    const saved = localStorage.getItem(this.RECENT_KEY);
    if (saved) {
      this.recentEmojis.set(JSON.parse(saved));
    }
  }

  close() {
    if (this.isClosing) return;
    this.isClosing = true;
    setTimeout(() => {
      this.closeEmojiPicker.emit();
    }, 180);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (
      !clickedElement.closest('.emoji-picker') &&
      !clickedElement.closest('[alt="Emoji"]')
    ) {
      this.close();
    }
  }

  @HostListener('document:keydown.escape')
  onEscapePress() {
    this.close();
  }

  emojis = [
    '👍',
    '❤️',
    '🔥',
    '⭐',
    '👏',
    '🙌',
    '😊',
    '😂',
    '🤔',
    '🤓',
    '😎',
    '🥳',
    '😅',
    '🤯',
    '💻',
    '⌨️',
    '🖥️',
    '👨‍💻',
    '👩‍💻',
    '🤖',
    '⚡',
    '🐛',
    '🔍',
    '🚀',
    '💡',
    '⚙️',
    '🔧',
    '🎮',
    '✨',
    '🔀',
    '🌿',
    '🎯',
    '📦',
    '✅',
    '💪',
    '🏆',
    '🎉',
    '💯',
    '🎖️',
    '🤝',
    '💬',
    '📢',
    '🔔',
    '📋',
    '📝',
    '⚠️',
    '🚫',
    '❌',
    '🆘',
    '🔒',
    '⏳',
    '☕',
    '🍕',
    '🎵',
    '🌈',
    '🎨',
    '🎲',
  ];

  selectEmoji(emoji: string) {
    this.emojiSelected.emit(emoji);
    this.updateRecentEmojis(emoji);
    this.close();
  }

  private updateRecentEmojis(emoji: string) {
    const current = this.recentEmojis();
    const updated = [emoji, ...current.filter((e) => e !== emoji)].slice(0, 8);
    this.recentEmojis.set(updated);
    localStorage.setItem(this.RECENT_KEY, JSON.stringify(updated));
  }
}
