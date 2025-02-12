import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyProfileCardComponent } from '../my-profile-card/my-profile-card.component';

@Component({
  selector: 'app-user-menu-header',
  imports: [],
  templateUrl: './user-menu-header.component.html',
  styleUrl: './user-menu-header.component.scss'
})

export class UserMenuHeaderComponent {

  dialog = inject(MatDialog);


  ngOnInit() {

  }

  getPosition(): { x: number; y: number } {

    const width = document.documentElement.clientWidth;
    const element = document.querySelector('.menu') as HTMLElement;
    const x = width - (element.offsetLeft + element.offsetWidth);
    const y = element.offsetTop;
    return { x, y };
  }

  openMenu() {

    const { x, y } = this.getPosition();
    this.dialog.open(MyProfileCardComponent, { position: { top: `${y}px`, right: `${x}px` } });
  }

  logOutClick() {


  }
}
