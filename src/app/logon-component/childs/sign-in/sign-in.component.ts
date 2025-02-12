import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../../shared/services/authentication/authentication.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  private authService = inject(AuthenticationService);
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  async signIn() {
    try {
      await this.authService.signIn(this.email, this.password).then(success => {
        if (success) {
          this.reroutedUser()
        }
      })
    } catch (error: any) {
      console.error('Sign-In error:', error);
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

  async loginWithGoogle() {
    try {
      await this.authService.signInWithGoogle();
    } catch (error: any) {
      console.error('Google Sign-In error:', error);
    }
  }
}
