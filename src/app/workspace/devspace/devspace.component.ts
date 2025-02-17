import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-devspace',
  imports: [CommonModule],
  templateUrl: './devspace.component.html',
  styleUrl: './devspace.component.scss',
})
export class DevspaceComponent {
  @Output() addChannel = new EventEmitter<Event>();

  isChannelsOpen = true;
  isDirectMessagesOpen = true;
  showAddChannel = false;

  toggleChannels() {
    this.isChannelsOpen = !this.isChannelsOpen;
  }

  toggleDirectMessages() {
    this.isDirectMessagesOpen = !this.isDirectMessagesOpen;
  }

  toggleAddChannel() {
    this.showAddChannel = !this.showAddChannel;
  }

  openChannelDialog(event: Event) {
    event.stopPropagation();
    this.addChannel.emit(event);
  }
}
