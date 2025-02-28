import { Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { LogonComponent } from './main-content/components/logon-component/logon.component';
import { SignUpComponent } from "./main-content/components/logon-component/childs/sign-up/sign-up.component";
import { SignInComponent } from './main-content/components/logon-component/childs/sign-in/sign-in.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PasswordBackComponent } from './main-content/components/logon-component/childs/password-back/password-back.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['logon']);
// basic auth guard wenn ihr eine neuen router link macht bitte die auth guard config anpassen oder schreibt mir @max
export const routes: Routes = [
    { path: '', component: MainContentComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
    {
        path: 'logon',
        component: LogonComponent,
        children: [
            {
                path: '',
                component: SignInComponent
            },  
            {
                path: 'signup',
                component: SignUpComponent
            },
            {
                path: 'password-back',
                component: PasswordBackComponent
            }
        ],
    },
];
