import {CommonModule} from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
//import { MatDialogRef } from '@angular/material/dialog';
import {DialogsService} from '../../../../../shared/services/dialogs-service/dialogs.service';


@Component({
    selector: 'app-add-people',
    imports: [CommonModule],
    templateUrl: './add-people.component.html',
    styleUrls: ['./add-people.component.scss', './add-people-second.scss']
})

export class AddPeopleComponent implements OnInit {

    dialogsService = inject(DialogsService);
    //dialogRef = inject(MatDialogRef);
    choice1 = false;
    choice2 = false;
    dropdownMenu = false;
    currentlyDropdown = false;
    showAddedUsers = false;
    channelName = 'Office-Team';
    inputValue = '';

    usersSearchResults = [
        {name: 'Steffen Hoffmann', avatar: 4, active: false},
        {name: 'Elias Neumann', avatar: 2, active: true},
        {name: 'Noah Braun', avatar: 6, active: false},
        {name: 'Sofia Müller', avatar: 5, active: true}
    ];

    addedUsers: { name: string; avatar: number; active: boolean }[] = [];


    ngOnInit() {

    }

    exitXClick() {

        this.dialogsService.showAddPeopleDialogForCreateChannel = false;
    }

    buttonClick() {


        console.log('button click');
    }

    addAllPeopleClick() {

        this.choice1 = true;
        this.choice2 = false;
        this.dropdownMenu = false;
        this.inputValue = '';
    }

    addSelectedPeopleClick() {

        this.choice2 = true;
        this.choice1 = false;
    }

    userClick(index: number) {

        this.addedUsers.push(this.usersSearchResults[index]);


        console.log('added users - ', this.addedUsers);
    }

    addedUsersIconsClick() {

        if (!this.showAddedUsers) {
            this.currentlyDropdown = this.dropdownMenu;
            this.showAddedUsers = true;
            this.dropdownMenu = false;
        } else {
            this.showAddedUsers = false;
            this.dropdownMenu = this.currentlyDropdown;
        }
    }

    userCardXClick(i: number) {

        this.addedUsers.splice(i, 1);
        if (this.addedUsers.length == 0) {
            this.showAddedUsers = false;
            this.dropdownMenu = this.currentlyDropdown;
        }
    }

    nameSearch(event: Event) {

        this.inputValue = (event.target as HTMLInputElement).value.trim();
        if (this.inputValue.length > 0) {
            this.dropdownMenu = true
        } else this.dropdownMenu = false;


        console.log('name - ', this.inputValue);
    }

    stopProp(event: Event) {

        event.stopPropagation();
    }
}
