import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmojiPickerComponent } from '../../../../../shared/components/emoji-picker/emoji-picker.component';
import { QuickReactionsComponent } from '../../../../../shared/components/quick-reactions/quick-reactions.component';
import { EditChannelComponent } from '../../../../../../app/shared/components/edit-channel/edit-channel.component';
import { DialogsService } from '../../../../../shared/services/dialogs-service/dialogs.service';

@Component({
  standalone: true,
  selector: 'app-thread',
  imports: [CommonModule, FormsModule, EmojiPickerComponent, QuickReactionsComponent, EditChannelComponent],
  templateUrl: './thread.component.html',
  styleUrl: './thread.component.scss',
})
export class ThreadComponent {
  @Output() closeThread = new EventEmitter<void>();
  isThreadClosing = false;
showEmojiPicker = false;
  messageText = '';
  hoveredMessageId: number | null = null;
  mousePosition = { x: 0, y: 0 };
  isClosing = false;

  dialogsService = inject(DialogsService);

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

  openEditChannelClick() {
    this.isClosing = true;
    setTimeout(() => {
      this.dialogsService.showEditChannel = false;
      this.isClosing = false;
    }, 300);
  }

  closeThreadView() {
    this.isThreadClosing = true;
    setTimeout(() => {
      this.closeThread.emit();
      this.isThreadClosing = false;
    }, 300);
  }
}
