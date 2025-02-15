import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



import { CreateChannelComponent } from '../create-channel/create-channel.component';


@Component({
  selector: 'app-add-people-area-middle',
  imports: [],
  templateUrl: './add-people-area-middle.component.html',
  styleUrl: './add-people-area-middle.component.scss'
})

export class AddPeopleAreaMiddleComponent {

  dialog = inject(MatDialog);





  channel() {

    this.dialog.open(CreateChannelComponent, {
      width: '872px',
      height: '539px',
      maxWidth: 'none'
    });
  }
}
