import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-reactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-reactions.component.html',
  styleUrl: './quick-reactions.component.scss',
})
export class QuickReactionsComponent {
  @Input() isVisible = false;
  @Output() addReaction = new EventEmitter<string>();
  @Output() openEmojiPicker = new EventEmitter<void>();
  @Output() addComment = new EventEmitter<void>();

  quickEmojis = ['👍', '😊'];

  onReactionClick(emoji: string) {
    this.addReaction.emit(emoji);
  }
}
