import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserMenuHeaderComponent } from '../../lukas-components/user-menu-header/user-menu-header.component';
import { UserMenuHeaderMobileComponent } from '../../lukas-components/user-menu-header-mobile/user-menu-header-mobile.component';
import { MyProfileCardComponent } from '../../lukas-components/my-profile-card/my-profile-card.component';

@Component({
  selector: 'app-user-menu-header-workspace',
  imports: [CommonModule, UserMenuHeaderComponent, UserMenuHeaderMobileComponent, MyProfileCardComponent],
  templateUrl: './user-menu-header-workspace.component.html',
  styleUrl: './user-menu-header-workspace.component.scss'
})

export class UserMenuHeaderWorkspaceComponent {

  data = {
    name: 'Frederik Beck',
    avatar: 3,
    online: true
  }

  showMenu = false;
  showMenuMobile = false;

}
