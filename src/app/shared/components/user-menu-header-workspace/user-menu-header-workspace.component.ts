import {CommonModule} from '@angular/common';
import {Component, inject, OnDestroy} from '@angular/core';
import {UserMenuHeaderComponent} from '../../../shared/components/user-menu-header/user-menu-header.component';
import {UserMenuHeaderMobileComponent} from '../user-menu-header-mobile/user-menu-header-mobile.component';
import {MyProfileCardComponent} from '../my-profile-card/my-profile-card.component';
import {DialogsService} from '../../../shared/services/dialogs-service/dialogs.service';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {FirestoreService} from "../../services/firestore/firestore.service";
import {User} from '@angular/fire/auth';
import {DocumentData, Firestore, onSnapshot} from '@angular/fire/firestore';

@Component({
    selector: 'app-user-menu-header-workspace',
    imports: [CommonModule, UserMenuHeaderComponent, UserMenuHeaderMobileComponent, MyProfileCardComponent],
    templateUrl: './user-menu-header-workspace.component.html',
    styleUrl: './user-menu-header-workspace.component.scss'
})

export class UserMenuHeaderWorkspaceComponent implements OnDestroy {

    public dialogsService = inject(DialogsService);
    user$: User | undefined
    data = {
        name: "",
        avatar: 3,
        online: true
    }
    tempData!: DocumentData;
    unSubList;
    unSubSingle;
    private auth = inject(AuthenticationService);
    private firestore = inject(Firestore);
    private firestoreService = inject(FirestoreService)

    constructor() {
        this.unSubList = onSnapshot(this.firestoreService.getUserData(), (element) => {
        })
        this.unSubSingle = this.setUserPhotoURL()
    }

    async setUserPhotoURL() {
        console.log(this.auth.user$)
        onSnapshot(this.firestoreService.getSingleDocRef("users", `${this.auth.user$}`), (element) => {
            console.log(element.data)
        })
    }

    ngOnDestroy(): void {
        this.unSubSingle;
        this.unSubList;
    }
}
