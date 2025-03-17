import { Component, inject } from '@angular/core';
import { LogonHeaderComponent } from "../logon-header/logon-header.component";
import { FormsModule } from '@angular/forms';
import { LogonFooterComponent } from '../logon-footer/logon-footer.component';
import { CommonModule } from '@angular/common';
import { addDoc, collection, collectionData, CollectionReference, doc, DocumentData, DocumentReference, Firestore, getDoc, updateDoc } from '@angular/fire/firestore';
import { getAuth, getIdToken, user, UserProfile } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-img-selection',
  imports: [FormsModule, LogonHeaderComponent, LogonFooterComponent, CommonModule],
  templateUrl: './profile-img-selection.component.html',
  styleUrl: './profile-img-selection.component.scss'
})
export class ProfileImgSelectionComponent {
  private firestore: Firestore = inject(Firestore); 
  avatars = ["../../../../../../assets/img/avatar0.svg", "../../../../../../assets/img/avatar1.svg", "../../../../../../assets/img/avatar2.svg", "../../../../../../assets/img/avatar3.svg", "../../../../../../assets/img/avatar4.svg", "../../../../../../assets/img/avatar5.svg"];
  currentUser = {
    name: "Frederik Beck",
    path: "../../../../../../assets/img/profile-pic-big.svg"
  }
  
  changePic(avatar: string) {
    this.currentUser.path = avatar;
  }

  choosePic() {
    let uId = getAuth().currentUser?.uid
    const docRef = doc(this.firestore, 'users', `${uId}`);
    let photoURL = this.currentUser.path
    updateDoc(docRef, { photoURL })
  }

}
