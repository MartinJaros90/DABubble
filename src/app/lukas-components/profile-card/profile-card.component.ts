import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../shared/services/authentication/authentication.service';
import { FirestoreService } from '../../shared/services/firestore/firestore.service';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {

  userData: any;
  userSubscription!: Subscription;
  
  constructor(private authService: AuthenticationService, private firestore: FirestoreService) {}

  ngOnInit() {
    this.userSubscription = this.authService.getCurrentUser().subscribe((user: User | null) => {
      if (user) {
        this.firestore.getUserData(user.uid).subscribe((data) => {
          this.userData = data;
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe(); // Clean up subscription
    }
  }
}
