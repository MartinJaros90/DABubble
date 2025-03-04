import { inject, Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInAnonymously, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, User } from '@angular/fire/auth';
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
	authState: any;
	
	constructor() {
		this.auth.onAuthStateChanged(user => {
			this.userSubject.next(user);
		});
		this.user$ = authState(this.auth);
	}

	async signUp(email: string, password: string, displayName: string, photoURL: string) {
		const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
		if (userCredential.user) {
			await updateProfile(userCredential.user, { displayName });
			await updateProfile(userCredential.user, { photoURL });

			console.log(userCredential)
			this.userSubject.next(userCredential.user);
		}

		this.firestore.setUserProfile(userCredential)
		return userCredential;
	}

	getCurrentUser(): Observable<User | null> {
		return this.user$;
	}

	async signIn(email: string, password: string) {
		return signInWithEmailAndPassword(this.auth, email, password);
	}

	async signInAnonymously(): Promise<void> {
		try {
			await signInAnonymously(this.auth);
			console.log("Anonymous login successful!");
		} catch (error: unknown) {
			console.error("Error during anonymous login:", error);
		}
	}

	async signInWithGoogle(): Promise<User | null> {
		try {
			const provider = new GoogleAuthProvider();
			const userCredential = await signInWithPopup(this.auth, provider);

			if (userCredential) {
				await this.firestore.setUserProfile(userCredential);
			}

			return userCredential.user;
		} catch (error: unknown) {
			console.error('Google Sign-In Error:', error);
			return null;
		}
	}

	async logout() {
		try {
			return signOut(this.auth)
		} catch (error: unknown) {
			console.error('Error sending password reset email:', error);
		}
	}

	async resetPassword(email: string): Promise<void> {
		try {
		  await sendPasswordResetEmail(this.auth, email);
		  console.log('Password reset email sent!');
		} catch (error: unknown) {
		  console.error('Error sending password reset email:', error);
		}
	}
}