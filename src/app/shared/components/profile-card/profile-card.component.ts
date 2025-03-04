import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
// ---------------------------------------------------------------------//


@Component({
  selector: 'app-profile-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})

export class ProfileCardComponent implements OnInit, OnDestroy {

  // --------------------------------------------//
  profileData = {
    avatar: 6,
    name: 'Frederik Beck',
    email: 'mail@frederik-beck.com',
    active: false
  }
  // --------------------------------------------//

  avatarUrl = 'assets/lukas-icons/profile-card/avatar-' + this.profileData.avatar + '.svg';
  activeStatusUrl = [
    'assets/lukas-icons/profile-card/not-active.svg',
    'assets/lukas-icons/profile-card/profile-card-active-user.svg'
  ];
  avatars: number[] = Array.from({ length: 7 }, (_, i) => i);

  //dialogRef = inject(MatDialogRef);

  // --------------------------------------------//


  ngOnInit() {

    this.loadFirebase();
  }

  ngOnDestroy() {

  }


  // ----------------------------------------------------------------------------------------------//
  /**
   * 
   *   ----- bitte nichts änern an meinem code ohne absprache -----
   * 
   *   zu profleData beim load
   *  
   */

  loadFirebase() {

  }

  messageClick() {

  }

}
