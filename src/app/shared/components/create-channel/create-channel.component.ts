import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddPeopleComponent } from './childes/add-people/add-people.component';
import { CommonModule } from '@angular/common';
import { DialogsService } from '../../../shared/services/dialogs-service/dialogs.service';

@Component({
  selector: 'app-create-channel',
  imports: [FormsModule, AddPeopleComponent, CommonModule],
  templateUrl: './create-channel.component.html',
  styleUrl: './create-channel.component.scss'
})

export class CreateChannelComponent {

  dialogsService = inject(DialogsService);
  channelName = '';
  channelDescription = '';

  
  createChannelClick() {

    this.dialogsService.showAddPeopleDialogForCreateChannel = true;


    console.log('# ', this.channelName);
    console.log('info - ', this.channelDescription);
  }

}
