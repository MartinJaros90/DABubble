import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../../shared/services/authentication/authentication.service';
import { LogonHeaderComponent } from "../logon-header/logon-header.component";

@Component({
  selector: 'app-password-back',
  imports: [FormsModule, RouterLink, LogonHeaderComponent],
  templateUrl: './password-back.component.html',
  styleUrl: './password-back.component.scss'
})
export class PasswordBackComponent {
  private authService = inject(AuthenticationService);
  email: string = '';

  constructor(private router: Router) { }

  validateEmail() {
    // Max war hier XD
    // ? im html pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
  }

  sendResetEmail() {
    if (this.email) {
      this.authService.resetPassword(this.email)
    }
  }
}
