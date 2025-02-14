import { Component } from '@angular/core';

@Component({
  selector: 'app-workspace',
  imports: [],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss',
})
export class WorkspaceComponent {
  isThreadVisible = true;
  isDevspaceVisible = true;
  isChannelsOpen = true;
  isDirectMessagesOpen = true;
  showAddChannel = false;

  toggleThread() {
    this.isThreadVisible = !this.isThreadVisible;
  }

  toggleDevspace() {
    this.isDevspaceVisible = !this.isDevspaceVisible;
  }

  toggleChannels() {
    this.isChannelsOpen = !this.isChannelsOpen;
  }

  toggleDirectMessages() {
    this.isDirectMessagesOpen = !this.isDirectMessagesOpen;
  }

  toggleAddChannel() {
    this.showAddChannel = !this.showAddChannel;
  }

  getChatClasses(): string {
    const classes = ['chat'];
    if (!this.isThreadVisible) classes.push('thread-hidden');
    if (!this.isDevspaceVisible) classes.push('devspace-hidden');
    if (!this.isThreadVisible && !this.isDevspaceVisible)
      classes.push('both-hidden');
    return classes.join(' ');
  }

  openChannelDialog(event: Event) {
    event.stopPropagation();
    console.log('Channel Dialog öffnen');
  }

  getWorkspaceMenuText(): string {
    return this.isDevspaceVisible
      ? 'Workspace-Menü schließen'
      : 'Workspace-Menü öffnen';
  }
}
