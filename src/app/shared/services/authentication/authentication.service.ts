import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, User } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {  
	private auth = inject(Auth);
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    this.auth.onAuthStateChanged(user => {
      this.userSubject.next(user);
    });
  }

  async signUp(email: string, password: string, fullName: string) {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    if (userCredential.user) {
      await updateProfile(userCredential.user, { displayName: fullName });
      this.userSubject.next(userCredential.user);
    }
    return userCredential;
  }

  async signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async signInWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  async logout() {
    return signOut(this.auth);
  }
}
