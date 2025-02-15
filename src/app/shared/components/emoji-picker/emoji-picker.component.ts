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

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (
      !clickedElement.closest('.emoji-picker') &&
      !clickedElement.closest('[alt="Emoji"]')
    ) {
      this.closeEmojiPicker.emit();
    }
  }

  @HostListener('document:keydown.escape')
  onEscapePress() {
    this.closeEmojiPicker.emit();
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
