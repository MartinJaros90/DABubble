import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmojiPickerComponent } from '../../shared/components/emoji-picker/emoji-picker.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, EmojiPickerComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  showEmojiPicker = false;
  messageText = '';

  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  handleEmojiSelected(emoji: string) {
    this.messageText += emoji;
    this.showEmojiPicker = false;
  }
}
