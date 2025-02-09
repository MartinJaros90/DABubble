import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



import { MyProfileCardComponent } from '../my-profile-card/my-profile-card.component';  //---------



@Component({
  selector: 'app-privacy-policy',
  imports: [CommonModule, MyProfileCardComponent],   //---------
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})

export class PrivacyPolicyComponent {

  fontSizeTopicLine = "32px";
}
