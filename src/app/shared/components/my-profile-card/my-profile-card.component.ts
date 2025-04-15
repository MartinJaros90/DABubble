import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogsService } from '../../../shared/services/dialogs-service/dialogs.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { doc, DocumentData, Firestore, getDoc } from '@angular/fire/firestore';
import { FirestoreService } from "../../services/firestore/firestore.service";
import { getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-my-profile-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './my-profile-card.component.html',
  styleUrl: './my-profile-card.component.scss'
})

export class MyProfileCardComponent implements OnInit {
  
  profileData = {
    avatar: 6,
    name: 'Gast',
    email: 'mail@frederik-beck.com'
  }

  public dialogsService = inject(DialogsService);
  private auth = inject(AuthenticationService);  
  private firestore = inject(Firestore);
  private firestoreService = inject(FirestoreService)


  avatarUrl = 'assets/lukas-icons/profile-card/avatar-' + this.profileData.avatar + '.svg';
  edit = false;
  editAvatar = false;
  newName = '';
  avatars: number[] = Array.from({ length: 7 }, (_, i) => i);
  currentAvatar = this.profileData.avatar;
  tempData!: DocumentData;
  

  ngOnInit() {

  }

  editCancel() {

  }

  editSave() {

  }

  avatarChooseClick(index: number) {

  }

  loadFirebase() {

  }

  saveFirebase() {

  }

  setUserPhotoURL() {
 
  }
  
}


