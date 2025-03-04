import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { UserMenuHeaderComponent } from '../../../shared/components/user-menu-header/user-menu-header.component';
import { UserMenuHeaderMobileComponent } from '../user-menu-header-mobile/user-menu-header-mobile.component';
import { MyProfileCardComponent } from '../my-profile-card/my-profile-card.component';
import { DialogsService } from '../../../shared/services/dialogs-service/dialogs.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { User } from '@angular/fire/auth';
@Component({
  selector: 'app-user-menu-header-workspace',
  imports: [CommonModule, UserMenuHeaderComponent, UserMenuHeaderMobileComponent, MyProfileCardComponent],
  templateUrl: './user-menu-header-workspace.component.html',
  styleUrl: './user-menu-header-workspace.component.scss'
})

export class UserMenuHeaderWorkspaceComponent implements OnInit {

  public dialogsService = inject(DialogsService);
  private auth = inject(AuthenticationService);  
  
  user$: User | undefined
  
  data = {
    name: "",
    avatar: 3,
    online: true
  }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if (user?.displayName) {
        this.data.name = user.displayName;
      }
    });
  }
}
