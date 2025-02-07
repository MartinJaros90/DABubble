import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthenticationService } from "../shared/services/authentication/authentication.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './logon.component.html',
  styleUrl: './logon.component.scss'
})
export class LogonComponent {
  private authService = inject(AuthenticationService);
  email: string = '';
  password: string = '';
  name: string = '';

  async register() {
    try {
      await this.authService.signUp(this.email, this.password);
    } catch (error: any) {
      console.error('Registration error:', error);
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
