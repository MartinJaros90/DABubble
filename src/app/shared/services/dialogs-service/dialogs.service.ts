import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DialogsService {

    showEditChannel = false;
    showAddChannel = false;
    //----------------------------------------------------
    showMyProfileCardForUserMenuHeaderWorkspace = false;
    showMenuForUserMenuHeaderWorkspace = false;
    showMenuMobileForUserMenuHeaderWorkspace = false;
    //----------------------------------------------------
    showAddPeopleDialogForCreateChannel = false;

    //----------------------------------------------------


    constructor() {
    }

    stopProp(event: Event) {

        event.stopPropagation();
    }
}
