import { Component, inject } from '@angular/core';
import { AuthenticationService } from "../../../../../shared/services/authentication/authentication.service";
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LogonHeaderComponent } from "../logon-header/logon-header.component";
import { LogonFooterComponent } from "../logon-footer/logon-footer.component";
import { ReroutedUserService } from "../../../../../shared/services/reroutUser/rerouted-user.service";

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, RouterLink, LogonHeaderComponent, LogonFooterComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  private authService = inject(AuthenticationService);
  private reroutUser = inject(ReroutedUserService);
  email: string = '';
  password: string = '';
  name: string = '';
  avatarNum: string = "";
  checkboxChecked: boolean = false;

	constructor(private router: Router) {
		
	}

  async signUp() {
    try {
      await this.authService.signUp(this.email, this.password, this.name, this.avatarNum).then(success => {
        if (success) {
          this.reroutUser.reroutedUser('/')
        }
			})
    } catch (error: any) {
      console.error('SignUp error:', error);
    }
  }

  async loginWithGoogle() {
    try {
      await this.authService.signInWithGoogle().then(success => {
        if (success) {
          this.reroutUser.reroutedUser('/')
        }
			})
    } catch (error: any) {
      console.error('Google Sign-In error:', error);
    }
  }
}
