import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmojiPickerComponent } from '../../shared/components/emoji-picker/emoji-picker.component';
import { QuickReactionsComponent } from '../../shared/components/quick-reactions/quick-reactions.component';

@Component({
  selector: 'app-chat',
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

  toggleEmojiPicker(fromQuickReactions = false) {
    if (fromQuickReactions) {
      this.hoveredMessageId = null;
    }
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  handleQuickReactionEmojiPicker() {
    console.log('Opening emoji picker from quick reactions');
    this.toggleEmojiPicker(true);
  }

  handleEmojiSelected(emoji: string) {
    if (this.hoveredMessageId) {
      console.log(
        `Adding reaction ${emoji} to message ${this.hoveredMessageId}`
      );
    } else {
      this.messageText += emoji;
    }
    this.showEmojiPicker = false;
  }

  handleAddComment() {
    console.log('Add comment clicked for message:', this.hoveredMessageId);
    // Logik für das Hinzufügen eines Kommentars implementieren
  }

  setHoveredMessage(event: MouseEvent, id: number | null) {
    this.hoveredMessageId = id;
    if (id !== null) {
      this.mousePosition = { x: event.clientX, y: event.clientY };
    }
  }
}
