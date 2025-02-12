import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WorkspaceComponent } from './workspace/workspace.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WorkspaceComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showSplash = true;

  onAnimationComplete() {
    this.showSplash = false;
  }
}
