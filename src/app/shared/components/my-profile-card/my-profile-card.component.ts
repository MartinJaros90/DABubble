import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogsService } from '../../../shared/services/dialogs-service/dialogs.service';
// ---------------------------------------------------------------------//


@Component({
  selector: 'app-my-profile-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './my-profile-card.component.html',
  styleUrl: './my-profile-card.component.scss'
})

export class MyProfileCardComponent {

  // --------------------------------------------//
  profileData = {
    avatar: 6,
    name: 'Frederik Beck',
    email: 'mail@frederik-beck.com'
  }
  // --------------------------------------------//
  dialogsService = inject(DialogsService);
  avatarUrl = 'assets/lukas-icons/profile-card/avatar-' + this.profileData.avatar + '.svg';
  edit = false;
  editAvatar = false;
  newName = '';
  avatars: number[] = Array.from({ length: 7 }, (_, i) => i);
  currentAvatar = this.profileData.avatar;
  // --------------------------------------------//



  ngOnInit() {

    this.loadFirebase();
  }

  ngOnDestroy() {

  }

  editCancel() {

    if (this.currentAvatar != this.profileData.avatar) this.avatarChooseClick(this.currentAvatar);
    this.editAvatar = false;
    this.edit = false;
    this.newName = ''; 
  }

  editSave() {

    this.newName = this.newName.trim();
    if (this.newName != "") {
      this.profileData.name = this.newName;
      this.newName = '';
      this.saveFirebase();
    }
    this.edit = false;
    this.editAvatar = false;
  }

  avatarChooseClick(index: number) {

    this.profileData.avatar = index;
    this.avatarUrl = 'assets/lukas-icons/profile-card/avatar-' + this.profileData.avatar + '.svg';
  }

  // ----------------------------------------------------------------------------------------------//
  /**
   * 
   *   ----- bitte nichts änern an meinem code ohne absprache -----
   * 
   *   zu profleData beim load
   * 
   *   von profleData beim save
   *  
   */

  loadFirebase() {

  }

  saveFirebase() {

  }
  
}


