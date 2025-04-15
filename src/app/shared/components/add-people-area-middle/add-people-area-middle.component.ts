import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {ProfileCardComponent} from '../profile-card/profile-card.component';
import {MyProfileCardComponent} from '../my-profile-card/my-profile-card.component';

@Component({
    selector: 'app-add-people-area-middle',
    imports: [CommonModule, ProfileCardComponent, MyProfileCardComponent],
    templateUrl: './add-people-area-middle.component.html',
    styleUrls: [
        './add-people-area-middle.component.scss',
        './add-people-area-middle-second.scss',
    ],
})
export class AddPeopleAreaMiddleComponent {
    showUsersDropdownMenu = false;
    showProfileCard = false;
    isMeForMyprofileCard = false;
    showAddPeople = false;

    channelName = 'Entwicklerteam';
    inputValue = '';
    dropdownMenu = false;
    showAddedUsers = false;

    lastScrollPosition = 0;
    opacityForScrollDiv = 0;

    blockButtonAddSelectedPeopleToUsersInChannel = true;

    channelUsers = [
        {name: 'Steffen Hoffmann', avatar: 4, active: false},
        {name: 'Elias Neumann', avatar: 2, active: true},
        {name: 'Noah Braun', avatar: 6, active: false},
        {name: 'Sofia Müller', avatar: 5, active: true},
    ];

    usersSearchResults = [
        {name: 'Steffen Hoffmann', avatar: 4, active: false},
        {name: 'Elias Neumann', avatar: 2, active: true},
        {name: 'Noah Braun', avatar: 6, active: false},
        {name: 'Sofia Müller', avatar: 5, active: true},
    ];

    addedUsers: { name: string; avatar: number; active: boolean }[] = [];

    openAddPeopleDialog() {
        if (
            window.matchMedia('(max-width: 600px)').matches &&
            !this.showUsersDropdownMenu
        ) {
            this.showUsersDropdownMenu = true;
        } else {
            this.blockButtonAddSelectedPeopleToUsersInChannel = true;
            this.showUsersDropdownMenu = false;
            this.addedUsers = [];
            this.addedUsers = [...this.channelUsers];
            this.showAddPeople = true;
            this.showAddedUsers = false;
            this.dropdownMenu = false;
            this.opacityForScrollDiv = 0;
            this.lastScrollPosition = 0;
        }
    }

    userClick(i: number) {
        console.log('index - ', i);

        if (true) {
            // abfrage, ob es ich bin ------------------------------
            this.isMeForMyprofileCard = true;
        } else {
            this.isMeForMyprofileCard = false;
        }
        this.showProfileCard = true;
    }

    resultOfSearchUserClick(i: number) {
        this.blockButtonAddSelectedPeopleToUsersInChannel = false;
        this.dropdownMenu = false;
        this.showAddedUsers = true;
        setTimeout(() => {
            const element = document.querySelector(
                '.users-added-input-div-inner'
            ) as HTMLElement;
            this.resultOfSearchUserClickScroll(i, element);
        }, 100);
    }

    resultOfSearchUserClickScroll(i: number, element: HTMLElement) {
        element.scrollTo({left: this.lastScrollPosition});
        setTimeout(() => {
            this.opacityForScrollDiv = 1;
        }, 100);

        setTimeout(() => {
            this.addedUsers.push(this.usersSearchResults[i]);
        }, 600);

        setTimeout(() => {
            element.scrollTo({left: element.scrollWidth, behavior: 'smooth'});
            this.lastScrollPosition = element.scrollWidth;
        }, 700);
    }

    addPeopleBodyDialogClick() {
        this.dropdownMenu = false;
        this.showAddedUsers = false;
        this.opacityForScrollDiv = 0;
    }

    nameSearch(event: Event) {
        this.inputValue = (event.target as HTMLInputElement).value.trim();
        if (this.inputValue.length > 0) {
            this.dropdownMenu = true;
        } else this.dropdownMenu = false;

        console.log('name - ', this.inputValue);
    }

    userCardXClick(i: number) {
        this.addedUsers.splice(i, 1);
        if (this.addedUsers.length == 0) {
            this.showAddedUsers = false;
        }
    }

    addSelectedPeopleToUsersInChannel() {
        this.channelUsers = [...this.addedUsers];
        this.showAddPeople = false;
    }

    stopProp(event: Event) {
        event.stopPropagation();
    }
}
