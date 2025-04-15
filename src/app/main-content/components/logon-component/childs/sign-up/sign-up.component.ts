import { Component, inject } from '@angular/core';
import { AuthenticationService } from "../../../../../shared/services/authentication/authentication.service";
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
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
	email = '';
	password = '';
	displayName = '';
	checkboxChecked = false;

	constructor() {

	}

	async signUp() {
		await this.authService.signUpWithEmail(this.email, this.password, this.displayName);
		this.reroutUser.reroutedUser("/")
	}

	async loginWithGoogle() {
		this.authService.loginWithGoogle();
	}

	sendUserToAvatarSelector() {
		this.signUp()
		this.reroutUser.reroutedUser('logon/profile-img')
	}
}
