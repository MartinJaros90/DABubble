import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { WorkspaceComponent } from './workspace/workspace.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WorkspaceComponent],
=======
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SplashScreenComponent],
>>>>>>> 9f0b9554d1a40790c1e7a735938ad95f827921f5
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showSplash = true;

  onAnimationComplete() {
    this.showSplash = false;
  }
}
