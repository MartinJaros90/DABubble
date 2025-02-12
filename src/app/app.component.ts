import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SplashScreenComponent } from "./splash-screen/splash-screen.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SplashScreenComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showSplash = true;

  onAnimationComplete() {
    this.showSplash = false;
  }
}
