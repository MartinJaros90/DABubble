import { Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from "@angular/fire/auth-guard";
import { LogonComponent } from './main-content/components/logon-component/logon.component';
import { SignUpComponent } from "./main-content/components/logon-component/childs/sign-up/sign-up.component";
import { SignInComponent } from './main-content/components/logon-component/childs/sign-in/sign-in.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PasswordBackComponent } from './main-content/components/logon-component/childs/password-back/password-back.component';
import { WorkspaceComponent } from './main-content/components/workspace/workspace.component';
import { ProfileImgSelectionComponent } from "./main-content/components/logon-component/childs/profile-img-selection/profile-img-selection.component";
import { pipe } from 'rxjs';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['logon']);
const redirectLoggedInToWorkspace = () => redirectLoggedInTo(['workspace']);
// basic auth guard wenn ihr eine neuen router link macht bitte die auth guard config anpassen oder schreibt mir @max
export const routes: Routes = [
    { 
        path: '', 
        component: WorkspaceComponent, 
        canActivate: [AuthGuard], 
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        children: [
            {
                path: 'workspace',
                component: WorkspaceComponent
            }
        ],
    },
    {
        path: 'logon',
        component: LogonComponent,
        data: { authGuardPipe: redirectLoggedInToWorkspace },
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
            },
            {
                path: 'profile-img',
                component: ProfileImgSelectionComponent
            },
        ],
    },
];
