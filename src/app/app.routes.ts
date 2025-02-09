import { Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { LogonComponent } from './logon-component/logon.component';
import { SignUpComponent } from "./logon-component/childs/sign-up/sign-up.component";
import { SignInComponent } from './logon-component/childs/sign-in/sign-in.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MyProfileCardComponent } from './lukas-components/my-profile-card/my-profile-card.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['logon']);
// basic auth guard wenn ihr eine neuen router link macht bitte die auth guard config anpassen oder schreibt mir @max
export const routes: Routes = [
    { path: 'p', component: MyProfileCardComponent },
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
            }
        ],
    },
];