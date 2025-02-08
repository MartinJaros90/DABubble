import { Routes } from '@angular/router';
import { LogonComponent } from './logon-component/logon.component';
import { SignUpComponent } from "./logon-component/childs/sign-up/sign-up.component";
import { SignInComponent } from './logon-component/childs/sign-in/sign-in.component';

export const routes: Routes = [
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
