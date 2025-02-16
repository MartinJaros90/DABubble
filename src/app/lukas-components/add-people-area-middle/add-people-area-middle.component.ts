import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';



@Component({
  selector: 'app-add-people-area-middle',
  imports: [CommonModule],
  templateUrl: './add-people-area-middle.component.html',
  styleUrl: './add-people-area-middle.component.scss'
})

export class AddPeopleAreaMiddleComponent {


  addedUsers = [
    { name: 'Steffen Hoffmann', avatar: 4, active: false },
    { name: 'Elias Neumann', avatar: 2, active: true },
    { name: 'Noah Braun', avatar: 6, active: false },
    { name: 'Sofia Müller', avatar: 5, active: true }
  ];
 
  
  addedUsersIconsClick() {

    
  }

  addUserClick() {


  }

  stopProp(event: Event) {

    event.stopPropagation();
  }
}
