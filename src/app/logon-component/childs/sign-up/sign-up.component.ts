import { Component, inject } from '@angular/core';
import { AuthenticationService } from "../../../shared/services/authentication/authentication.service";
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  private authService = inject(AuthenticationService);
  email: string = '';
  password: string = '';
  name: string = '';
  avatarNum: string = "";

	constructor(private router: Router) {
		
	}

  async signUp() {
    try {
      await this.authService.signUp(this.email, this.password, this.name, this.avatarNum).then(success => {
        if (success) {
          this.reroutedUser()
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
          this.reroutedUser()
        }
			})
    } catch (error: any) {
      console.error('Google Sign-In error:', error);
    }
  }

	reroutedUser() {
    this.router.navigate(['/']).then(success => {
      if (success) {
        console.log('Navigation successful');
      } else {
        console.error('Navigation failed');
      }
    }).catch(err => {
      console.error('Navigation error:', err);
    });
  }
}
