import { Component, inject } from '@angular/core';
import { AuthenticationService } from "../../../shared/services/authentication/authentication.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  private authService = inject(AuthenticationService);
  email: string = '';
  password: string = '';
  name: string = '';


  async signUp() {
    try {
      await this.authService.signUp(this.email, this.password, this.name);
    } catch (error: any) {
      console.error('SignUp error:', error);
    }
  }
}
