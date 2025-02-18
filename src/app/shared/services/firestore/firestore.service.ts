import { inject, Injectable } from '@angular/core';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  private firestore = inject(Firestore)

  constructor() { }

  async setUserProfile(userCredential: UserCredential) {
    const userRef = doc(this.firestore, `users/${userCredential.user.uid}`);
    await setDoc(userRef, {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      displayName: userCredential.user.displayName,
      createdAt: new Date(),
    });

    return userCredential;
  }

  getUserData(uid: string): Observable<any> {
    const userRef = doc(this.firestore, `users/${uid}`);
    return docData(userRef);
  }
}
