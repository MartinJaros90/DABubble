import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-people',
  imports: [CommonModule],
  templateUrl: './add-people.component.html',
  styleUrl: './add-people.component.scss'
})

export class AddPeopleComponent {

  dialogRef = inject(MatDialogRef);
  choice1 = false;
  choice2 = false;
  dropdownMenu = false;
  buttonTabIndex = -1;
  channelName = 'Office-Team';
  inputValue = '';

  usersSearchResults = [
    { name: 'Steffen Hoffmann', avatar: 4, active: false },
    { name: 'Elias Neumann', avatar: 2, active: true },
    { name: 'Noah Braun', avatar: 6, active: false },
    { name: 'Sofia Müller', avatar: 5, active: true }
  ];


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


    console.log(index);

  }

  nameSearch(event: Event) {

    this.inputValue = (event.target as HTMLInputElement).value.trim();


    if (this.inputValue.length > 0) { this.dropdownMenu = true } else this.dropdownMenu = false;


    console.log('name - ', this.inputValue);

  }
}
