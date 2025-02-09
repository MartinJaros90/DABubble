import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile-card',
  imports: [],
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


  ngOnInit() {


        
  }

}
