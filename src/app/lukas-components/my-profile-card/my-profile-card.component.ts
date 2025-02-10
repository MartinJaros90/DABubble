import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../shared/services/authentication/authentication.service';
import { FirestoreService } from '../../shared/services/firestore/firestore.service';
import { User } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-profile-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './my-profile-card.component.html',
  styleUrl: './my-profile-card.component.scss'
=======
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
	selector: 'app-my-profile-card',
	imports: [CommonModule, MatFormFieldModule, MatInputModule],
	templateUrl: './my-profile-card.component.html',
	styleUrl: './my-profile-card.component.scss'
>>>>>>> 15bdad78b38b355108f34d9142c902b23d64a097
})

export class MyProfileCardComponent implements OnInit {
	edit = true;
	avatarUrl: any
	userSubscription!: Subscription;
	profileData = {
		avatar: 1,
		name: undefined,
		email: undefined
	}

<<<<<<< HEAD
  // --------------------------------------------//

  profileData = {
    avatar: 6,
    name: 'Frederik Beck',
    email: 'mail@frederik-beck.com'
  }

  // --------------------------------------------//

  avatarUrl = 'assets/lukas-icons/profile-card/avatar-' + this.profileData.avatar + '.svg';
  edit = false;
  editAvatar = false;
  newName = '';
  avatars: number[] = Array.from({ length: 7 }, (_, i) => i);
  currentAvatar = this.profileData.avatar;


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
=======
	constructor(private authService: AuthenticationService, private firestore: FirestoreService) {}

	ngOnInit() {
		this.userSubscription = this.authService.getCurrentUser().subscribe((user: User | null) => {
			if (user) {
				this.firestore.getUserData(user.uid).subscribe((data) => {
					this.profileData.avatar = 4
					this.profileData.name = data.displayName
					this.profileData.email = data.email;
					console.log(this.profileData, data)
					this.avatarUrl = 'assets/lukas-icons/profile-card/avatar-' + this.profileData.avatar + '.svg';
				});
			}
		});
	}

	ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
>>>>>>> 15bdad78b38b355108f34d9142c902b23d64a097
}
/* 


import { PrivacyPolicyComponent } from './lukas-components/privacy-policy/privacy-policy.component';



{ path: '', component: PrivacyPolicyComponent }


*/
