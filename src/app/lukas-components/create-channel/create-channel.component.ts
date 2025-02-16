import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { MatDialogRef } from '@angular/material/dialog';
//import { MatDialog } from '@angular/material/dialog';
//import { AddPeopleComponent } from '../add-people/add-people.component';

@Component({
  selector: 'app-create-channel',
  imports: [FormsModule],
  templateUrl: './create-channel.component.html',
  styleUrl: './create-channel.component.scss'
})

export class CreateChannelComponent {

  //dialogRef = inject(MatDialogRef);
  //dialog = inject(MatDialog);
  channelName: string = '';
  channelDescription: string = '';


  createChannelClick() {


    console.log('# ', this.channelName);
    console.log('info - ', this.channelDescription);


    /* this.dialogRef.close();
    this.dialogRef = this.dialog.open(AddPeopleComponent, {
      width: '710px',
      height: 'auto',
      maxWidth: 'none',
      panelClass: ['no-overflow-dialog'],
    });
    this.dialogRef.componentInstance.channelName = this.channelName; */
  }

}
