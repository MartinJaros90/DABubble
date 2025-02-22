import { Component, inject } from '@angular/core';
import { DialogsService } from '../dialogs-service/dialogs.service';


@Component({
  selector: 'app-user-menu-header',
  imports: [],
  templateUrl: './user-menu-header.component.html',
  styleUrl: './user-menu-header.component.scss'
})

export class UserMenuHeaderComponent {

  dialogsService = inject(DialogsService);


  ngOnInit() {

  }

  profileClick() {

    this.dialogsService.showMyProfileCardForUserMenuHeaderWorkspace = true;    
  }

  logOutClick() {


  }
}
