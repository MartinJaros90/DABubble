import { Component, inject } from '@angular/core';
import { DialogsService } from '../dialogs-service/dialogs.service';

@Component({
  selector: 'app-user-menu-header-mobile',
  imports: [],
  templateUrl: './user-menu-header-mobile.component.html',
  styleUrl: './user-menu-header-mobile.component.scss'
})

export class UserMenuHeaderMobileComponent {

  dialogsService = inject(DialogsService);


  exitClick() {

    this.dialogsService.showMenuForUserMenuHeaderWorkspace = false;
    this.dialogsService.showMenuMobileForUserMenuHeaderWorkspace = false;
  }

  profileClick() {

    this.dialogsService.showMyProfileCardForUserMenuHeaderWorkspace = true;
  }

  logOutClick() {


  }
}
