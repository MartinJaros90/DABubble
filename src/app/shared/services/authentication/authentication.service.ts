import { inject, Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, User } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { FirestoreService } from "../firestore/firestore.service";

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {  
	private auth = inject(Auth);
  private firestore = inject(FirestoreService);
  private userSubject = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null>;
  
  constructor() {
    this.auth.onAuthStateChanged(user => {
      this.userSubject.next(user);
    });
    this.user$ = authState(this.auth);
  }

  async signUp(email: string, password: string, displayName: string) {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    if (userCredential.user) {
      await updateProfile(userCredential.user, { displayName });

      this.userSubject.next(userCredential.user);
    }

    this.firestore.setUserProfile(userCredential)
    return userCredential;
  }

  getCurrentUser(): Observable<User | null> {
    return this.user$; // Return the observable user state
  }

  async signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async signInWithGoogle(): Promise<User | null> {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(this.auth, provider);

      if (userCredential) {
        await this.firestore.setUserProfile(userCredential);
      }

      return userCredential.user;
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      return null;
    }
  }

  async logout() {
    return signOut(this.auth);
  }
}
