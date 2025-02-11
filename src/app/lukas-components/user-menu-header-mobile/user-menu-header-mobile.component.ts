import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyProfileCardComponent } from '../my-profile-card/my-profile-card.component';

@Component({
  selector: 'app-user-menu-header-mobile',
  imports: [],
  templateUrl: './user-menu-header-mobile.component.html',
  styleUrl: './user-menu-header-mobile.component.scss'
})

export class UserMenuHeaderMobileComponent {

  dialog = inject(MatDialog);


  openMenu() {

    this.dialog.open(MyProfileCardComponent);
  }

  logOutClick() {


  }
}
