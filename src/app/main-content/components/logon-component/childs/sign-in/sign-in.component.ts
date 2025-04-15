import {Component, inject} from '@angular/core';
import {AuthenticationService} from "../../../../../shared/services/authentication/authentication.service";
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {LogonHeaderComponent} from "../logon-header/logon-header.component";
import {LogonFooterComponent} from '../logon-footer/logon-footer.component';
import {ReroutedUserService} from "../../../../../shared/services/reroutUser/rerouted-user.service";

@Component({
    selector: 'app-sign-in',
    standalone: true,
    imports: [FormsModule, RouterLink, RouterLinkActive, LogonHeaderComponent, LogonFooterComponent],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
    loginFormModel = {
        email: '',
        password: '',
    }
    private authService = inject(AuthenticationService);
    private reroutUser = inject(ReroutedUserService)

    constructor() {
    }

    async signIn() {
        await this.authService.loginWithEmail(this.loginFormModel.email, this.loginFormModel.password);
        this.reroutUser.reroutedUser('/')
    }

    async signInAnonymous() {
        this.authService.loginWithEmail(this.loginFormModel.email, this.loginFormModel.password);
    }

    async loginWithGoogle() {
        this.authService.loginWithGoogle();
    }
}
