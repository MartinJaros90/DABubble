import { Component } from '@angular/core';

@Component({
  selector: 'app-workspace',
  imports: [],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
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
    if (!this.isThreadVisible && !this.isDevspaceVisible) classes.push('both-hidden');
    return classes.join(' ');
  }

}
