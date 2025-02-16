import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmojiPickerComponent } from '../../shared/components/emoji-picker/emoji-picker.component';
import { QuickReactionsComponent } from '../../shared/components/quick-reactions/quick-reactions.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    EmojiPickerComponent,
    QuickReactionsComponent,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  showEmojiPicker = false;
  messageText = '';
  hoveredMessageId: number | null = null;
  mousePosition = { x: 0, y: 0 };

  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  handleEmojiSelected(emoji: string) {
    this.messageText += emoji;
    this.showEmojiPicker = false;
  }

  setHoveredMessage(event: MouseEvent, id: number | null) {
    this.hoveredMessageId = id;
    if (id !== null) {
      this.mousePosition = { x: event.clientX, y: event.clientY };
    }
  }
}
