import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../shared/services/authentication/authentication.service';
import { FirestoreService } from '../../shared/services/firestore/firestore.service';
import { User } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
	selector: 'app-my-profile-card',
	imports: [CommonModule, MatFormFieldModule, MatInputModule],
	templateUrl: './my-profile-card.component.html',
	styleUrl: './my-profile-card.component.scss'
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
}
/* 


import { PrivacyPolicyComponent } from './lukas-components/privacy-policy/privacy-policy.component';



{ path: '', component: PrivacyPolicyComponent }


*/
