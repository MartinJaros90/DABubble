import {CommonModule} from '@angular/common';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-edit-channel',
    imports: [CommonModule, FormsModule],
    templateUrl: './edit-channel.component.html',
    styleUrls: ['./edit-channel.component.scss', './edit-channel-second.scss', './edit-channel-third.scss']
})

export class EditChannelComponent implements OnInit, OnDestroy {

    channelName = 'Entwicklerteam';
    channelDescription = `
  Dieser Channel ist für alles rund um #dfsdf vorgesehen.
  Hier kannst du zusammen mit deinem Team Meetings abhalten, Dokumente teilen und Entscheidungen treffen.
  `;
    createdBy = 'Noah Braun';

    movableElements = [
        '.description-movable', '.description div:nth-of-type(1) span', '.created-by-movable span', '.created-by-movable2 span'
    ];
    classesForMovableElements = [
        'movable-text-position-l', 'movable-text-position-r', 'movable-text-position-l-b', 'movable-text-position-l-b'
    ];

    editChannelName = false;
    newChannelName = '';
    editChannelDescription = false;
    newChannelDescription = '';

    mediaQuery: MediaQueryList;
    isMobile: boolean;
    mediaQueryListener: (event: MediaQueryListEvent) => void;

    channelUsers = [
        {name: 'Steffen Hoffmann', avatar: 4, active: false},
        {name: 'Elias Neumann', avatar: 2, active: true},
        {name: 'Noah Braun', avatar: 6, active: false},
        {name: 'Sofia Müller', avatar: 5, active: true}
    ];
    isMeForMyprofileCard = false;
    showProfileCard = false;


    constructor() {

        this.mediaQuery = window.matchMedia("(max-width: 600px)");
        this.isMobile = this.mediaQuery.matches;
        this.mediaQueryListener = (event: MediaQueryListEvent) => {
            this.isMobile = event.matches
        };
    }

    ngOnInit() {

        this.mediaQuery.addEventListener("change", this.mediaQueryListener);
    }

    ngOnDestroy() {

        this.mediaQuery.removeEventListener("change", this.mediaQueryListener);
    }

    channelNameEditClick() {

        if (this.editChannelName) this.saveChannelName();
        const el = document.querySelector('.channel-name-movable') as HTMLElement;
        const el2 = document.querySelector('.channel-name-edit-div span') as HTMLElement;
        if (!this.editChannelName) {
            this.openEditChannelName(el, el2);
        } else {
            this.editChannelName = false;
            el.classList.remove('movable-text-position-l');
            el2.classList.remove('movable-text-position-r');
        }
    }

    openEditChannelName(el: HTMLElement, el2: HTMLElement) {

        this.newChannelName = '';
        setTimeout(() => {
            this.editChannelName = true
        }, 120);
        setTimeout(() => {
            document.getElementById('input1')?.focus()
        }, 170);
        el.classList.add('movable-text-position-l');
        el2.classList.add('movable-text-position-r');
    }

    channelDescriptionEditClick() {

        if (this.editChannelDescription) this.saveChannelDescription();
        const [el, el2, el3, el4] = this.movableElements.map(el => document.querySelector(el) as HTMLElement);
        if (!this.editChannelDescription) {
            this.openEditChannelDescription(el, el2, el3, el4);
        } else {
            this.editChannelDescription = false;
            const elements = [el, el2, el3, el4];
            elements.forEach((element, index) => {
                element.classList.remove(this.classesForMovableElements[index])
            });
        }
    }

    openEditChannelDescription(el: HTMLElement, el2: HTMLElement, el3: HTMLElement, el4: HTMLElement) {

        this.newChannelDescription = '';
        setTimeout(() => {
            this.editChannelDescription = true
        }, 120);
        setTimeout(() => {
            document.getElementById('input2')?.focus();
        }, 170);
        const elements = [el, el2, el3, el4];
        elements.forEach((element, index) => {
            element.classList.add(this.classesForMovableElements[index])
        });
    }

    saveChannelName() {

        this.newChannelName = this.newChannelName.trim();
        if (this.newChannelName == '') return;
        this.channelName = this.newChannelName;


        console.log('channel name saved', this.newChannelName);
    }

    saveChannelDescription() {

        this.newChannelDescription = this.newChannelDescription.trim();
        if (this.newChannelDescription == '') return;
        this.channelDescription = this.newChannelDescription;


        console.log('channel description saved', this.newChannelDescription);
    }

    userClick(i: number) {

        console.log('index - ', i);

        if (true) {                          // abfrage, ob es ich bin ------------------------------
            this.isMeForMyprofileCard = true;
        } else {
            this.isMeForMyprofileCard = false;
        }
        this.showProfileCard = true;
    }

    leaveChannelClick() {


        console.log('leave channel');
    }

}



