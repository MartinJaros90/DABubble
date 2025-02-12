import { Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { LogonComponent } from './logon-component/logon.component';
import { WorkspaceComponent } from './workspace/workspace.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['logon']);
// basic auth guard wenn ihr eine neuen router link macht bitte die auth guard config anpassen oder schreibt mir @max
export const routes: Routes = [
    { path: '', component: WorkspaceComponent },
];
