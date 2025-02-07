import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../../shared/services/authentication/authentication.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  private authService = inject(AuthenticationService);
  email: string = '';
  password: string = '';
  name: string = '';

  async signIn() {
    try {
      await this.authService.signIn(this.email, this.password);
    } catch (error: any) {
      console.error('Signin error:', error);
    }
  }

  async loginWithGoogle() {
    try {
      await this.authService.signInWithGoogle();
    } catch (error: any) {
      console.error('Google Sign-In error:', error);
    }
  }
}
