import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, PickerModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  showSplash = true;

  onAnimationComplete() {
    this.showSplash = false;
  }
}
