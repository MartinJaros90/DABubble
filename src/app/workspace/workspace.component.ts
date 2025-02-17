import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { DevspaceComponent } from './devspace/devspace.component';

@Component({
  selector: 'app-workspace',
  imports: [CommonModule, ChatComponent, DevspaceComponent],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss',
})
export class WorkspaceComponent {
  isThreadVisible = true;
  isDevspaceVisible = true;

  toggleThread() {
    this.isThreadVisible = !this.isThreadVisible;
  }

  toggleDevspace() {
    this.isDevspaceVisible = !this.isDevspaceVisible;
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
    console.log('Channel Dialog öffnen');
  }

  getWorkspaceMenuText(): string {
    return this.isDevspaceVisible
      ? 'Workspace-Menü schließen'
      : 'Workspace-Menü öffnen';
  }
}
