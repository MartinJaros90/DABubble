import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-password-back',
  imports: [FormsModule, RouterLink],
  templateUrl: './password-back.component.html',
  styleUrl: './password-back.component.scss'
})
export class PasswordBackComponent {
  email: string = '';
  isEmailValid: boolean = false;

  constructor(private router: Router) { }

  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isEmailValid = emailPattern.test(this.email);
  }

}
