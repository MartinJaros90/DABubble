import { Component, inject } from '@angular/core';
import { AuthenticationService } from "../../../../../shared/services/authentication/authentication.service";
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogonHeaderComponent } from "../logon-header/logon-header.component";
import { LogonFooterComponent } from '../logon-footer/logon-footer.component';
import { ReroutedUserService } from "../../../../../shared/services/reroutUser/rerouted-user.service";

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule, RouterLink, RouterLinkActive, LogonHeaderComponent, LogonFooterComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  private authService = inject(AuthenticationService);
  private reroutUser = inject(ReroutedUserService);
  email = '';
  password = '';

  constructor() {}

  async signIn() {
    try {
      await this.authService.signIn(this.email, this.password).then(success => {
        if (success) {
          this.reroutUser.reroutedUser('/')
        }
      })
    } catch (error: any) {
      console.error('Sign-In error:', error);
    }    
  }

  async signInAnonymous() {
    await this.authService.signInAnonymously()
    this.reroutUser.reroutedUser('/')
  }

  async loginWithGoogle() {
    try {
      await this.authService.signInWithGoogle();
      this.reroutUser.reroutedUser('/')
    } catch (error: any) {
      console.error('Google Sign-In error:', error);
    }
  }
}
