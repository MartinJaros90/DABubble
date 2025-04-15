import {Injectable} from '@angular/core';
import {
    Auth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    signInAnonymously,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    user
} from '@angular/fire/auth';
import {Firestore} from "@angular/fire/firestore";
import {Observable} from 'rxjs';
import {doc, setDoc} from 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    user$: Observable<any>;

    constructor(private auth: Auth, private firestore: Firestore) {
        this.user$ = user(auth);
    }

    async signUpWithEmail(email: string, password: string, displayName: string) {
        const credentials = await createUserWithEmailAndPassword(this.auth, email, password);
        if (credentials.user) {
            const userRef = doc(this.firestore, `users/${credentials.user.uid}`);
            await setDoc(userRef, {
                displayName: displayName,
                email: credentials.user.email,
                photoURL: null,
                uid: credentials.user.uid
            });
        }
    }

    async loginWithEmail(email: string, password: string) {
        await signInWithEmailAndPassword(this.auth, email, password);
    }

    async loginWithGoogle() {
        const provider = new GoogleAuthProvider();
        const credentials = await signInWithPopup(this.auth, provider);

        if (credentials.user) {
            const userRef = doc(this.firestore, `users/${credentials.user.uid}`);
            await setDoc(userRef, {
                displayName: credentials.user.displayName,
                email: credentials.user.email,
                photoURL: credentials.user.photoURL,
                uid: credentials.user.uid
            }, {merge: true});
        }
    }

    async loginAnonymously() {
        await signInAnonymously(this.auth);
    }

    async resetPassword(email: string) {
        await sendPasswordResetEmail(this.auth, email);
    }

    async logout() {
        await signOut(this.auth);
    }
}
