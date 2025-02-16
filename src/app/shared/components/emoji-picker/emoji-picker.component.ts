import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emoji-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emoji-picker.component.html',
  styleUrl: './emoji-picker.component.scss',
})
export class EmojiPickerComponent {
  @Output() emojiSelected = new EventEmitter<string>();
  @Output() closeEmojiPicker = new EventEmitter<void>();
  isClosing = false;

  close() {
    if (this.isClosing) return; // Verhindert mehrfaches Schließen
    this.isClosing = true;
    setTimeout(() => {
      this.closeEmojiPicker.emit();
    }, 180); // Leicht verkürzte Animations-Dauer für smootheren Übergang
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
  }
}
