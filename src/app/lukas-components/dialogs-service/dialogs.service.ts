import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DialogsService {

  showEditChannel = false;
  showAddChannel = false;


  constructor() { }

  stopProp(event: Event) {

    event.stopPropagation();
  }
}
