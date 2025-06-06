import {Component, inject, OnInit} from '@angular/core';
import {DialogsService} from '../../services/dialogs-service/dialogs.service';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {ReroutedUserService} from '../../services/reroutUser/rerouted-user.service';
import {RealtimeDbService} from "../../services/realtimeDB/realtime-db.service";

@Component({
    selector: 'app-user-menu-header',
    imports: [],
    templateUrl: './user-menu-header.component.html',
    styleUrl: './user-menu-header.component.scss'
})

export class UserMenuHeaderComponent implements OnInit {

    private dialogsService = inject(DialogsService);
    private authService = inject(AuthenticationService)
    private realtimeDB = inject(RealtimeDbService)
    private reroutUser = inject(ReroutedUserService)


    ngOnInit() {

    }

    profileClick() {
        this.dialogsService.showMyProfileCardForUserMenuHeaderWorkspace = true;
    }

    async logOutClick() {
        await this.realtimeDB.setUserOfflineOnLogout();
        await this.authService.logout();
        this.reroutUser.reroutedUser('/logon')
    }
}
