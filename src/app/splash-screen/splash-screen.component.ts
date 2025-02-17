import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-splash-screen',
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit {
  @Output() animationComplete = new EventEmitter<void>();

  showLogo = false;
  showText = false;
  startAnimation = false;
  hideBackground = false;

  ngOnInit() {
    setTimeout(() => {
      this.showLogo = true;
    }, 300);

    setTimeout(() => {
      this.showText = true;
    }, 1000);

    setTimeout(() => {
      this.startAnimation = true;
    }, 1800);

    setTimeout(() => {
      this.hideBackground = true;
    }, 3000);

    setTimeout(() => {
      this.animationComplete.emit();
    }, 4200);
  }
}
