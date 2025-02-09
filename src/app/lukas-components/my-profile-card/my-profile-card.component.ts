import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-my-profile-card',
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './my-profile-card.component.html',
  styleUrl: './my-profile-card.component.scss'
})

export class MyProfileCardComponent {

  profileData = {
    avatar: 4,
    name: 'Frederik Beck',
    email: 'mail@frederik-beck.com'
  }

  avatarUrl = 'assets/lukas-icons/profile-card/avatar-' + this.profileData.avatar + '.svg';
  edit = true;

  ngOnInit() {



  }

}


/* 


import { PrivacyPolicyComponent } from './lukas-components/privacy-policy/privacy-policy.component';



{ path: '', component: PrivacyPolicyComponent }


*/
