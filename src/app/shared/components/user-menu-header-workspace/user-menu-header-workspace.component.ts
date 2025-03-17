import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { UserMenuHeaderComponent } from '../../../shared/components/user-menu-header/user-menu-header.component';
import { UserMenuHeaderMobileComponent } from '../user-menu-header-mobile/user-menu-header-mobile.component';
import { MyProfileCardComponent } from '../my-profile-card/my-profile-card.component';
import { DialogsService } from '../../../shared/services/dialogs-service/dialogs.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { getAuth, User } from '@angular/fire/auth';
import { DocumentData, Firestore, collection, collectionData, collectionGroup, doc, getDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-user-menu-header-workspace',
  imports: [CommonModule, UserMenuHeaderComponent, UserMenuHeaderMobileComponent, MyProfileCardComponent],
  templateUrl: './user-menu-header-workspace.component.html',
  styleUrl: './user-menu-header-workspace.component.scss'
})

export class UserMenuHeaderWorkspaceComponent implements OnInit {

  public dialogsService = inject(DialogsService);
  private auth = inject(AuthenticationService);  
  private firestore = inject(Firestore); 
  
  user$: User | undefined
  
  data = {
    name: "",
    avatar: 3,
    online: true
  }

  tempData!: DocumentData;

  ngOnInit() {
    this.setUserPhotoURL()
    this.auth.user$.subscribe(user => {
      if (user?.displayName) {
        this.data.name = user.displayName;
      }
    });
  }

  async setUserPhotoURL() {
    let ref = getAuth().currentUser?.uid
    const userProfileCollection = doc(this.firestore, `users/${ref}`)
    const docSnap = await getDoc(userProfileCollection);
    if (docSnap.exists()) {
      this.tempData = docSnap.data()  
      this.data.avatar = this.tempData['photoURL']
    }  
  }
}
