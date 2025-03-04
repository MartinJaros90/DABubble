import { Component } from '@angular/core';
import { UserMenuHeaderWorkspaceComponent } from '../user-menu-header-workspace/user-menu-header-workspace.component';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [UserMenuHeaderWorkspaceComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
