import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogsService } from '../../lukas-components/dialogs-service/dialogs.service';
import { CreateChannelComponent } from '../../lukas-components/create-channel/create-channel.component';

@Component({
  selector: 'app-devspace',
  imports: [CommonModule, CreateChannelComponent, CommonModule],
  templateUrl: './devspace.component.html',
  styleUrl: './devspace.component.scss',
})
export class DevspaceComponent {
  @Output() addChannel = new EventEmitter<Event>();

  isChannelsOpen = true;
  isDirectMessagesOpen = true;
  //showAddChannel = false;
  isClosing = false;

  dialogsService = inject(DialogsService);

  toggleChannels() {
    this.isChannelsOpen = !this.isChannelsOpen;
  }

  toggleDirectMessages() {
    this.isDirectMessagesOpen = !this.isDirectMessagesOpen;
  }

  toggleAddChannel() {
    //this.showAddChannel = !this.showAddChannel;

    this.dialogsService.showAddChannel = true;
  }

  openChannelDialog(event: Event) {
    event.stopPropagation();
    this.addChannel.emit(event);
  }

  closeDialog() {
    this.isClosing = true;
    setTimeout(() => {
      this.dialogsService.showAddChannel = false;
      this.isClosing = false;
    }, 300);
  }
}
