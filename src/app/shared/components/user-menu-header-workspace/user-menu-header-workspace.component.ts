import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserMenuHeaderComponent } from '../../../shared/components/user-menu-header/user-menu-header.component';
import { UserMenuHeaderMobileComponent } from '../user-menu-header-mobile/user-menu-header-mobile.component';
import { MyProfileCardComponent } from '../my-profile-card/my-profile-card.component';
import { DialogsService } from '../../../shared/services/dialogs-service/dialogs.service';

@Component({
  selector: 'app-user-menu-header-workspace',
  imports: [CommonModule, UserMenuHeaderComponent, UserMenuHeaderMobileComponent, MyProfileCardComponent],
  templateUrl: './user-menu-header-workspace.component.html',
  styleUrl: './user-menu-header-workspace.component.scss'
})

export class UserMenuHeaderWorkspaceComponent {

  dialogsService = inject(DialogsService);

  data = {
    name: 'Frederik Beck',
    avatar: 3,
    online: true
  }

}
