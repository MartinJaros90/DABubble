import { inject, Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { Database, ref, onDisconnect, update } from '@angular/fire/database';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
	providedIn: 'root'
})

export class RealtimeDbService {
	private auth = inject(Auth)
	private firestore = inject(Firestore)
	private database = inject(Database)
	

	// Track user presence in Realtime Database

  trackUserPresence(): void {
    authState(this.auth).pipe(
      switchMap(user => {
        if (user) {
          const userStatusRef = ref(this.database, `users/${user.uid}`);

          // Update "online" status in Realtime Database
          update(userStatusRef, { online: true }).then(() => {
            // Handle disconnection
            onDisconnect(ref(this.database, `users/${user.uid}/online`)).set(false);
            onDisconnect(ref(this.database, `users/${user.uid}/lastSeen`)).set(Date.now());

            // Also update Firestore last seen time
            const userDocRef = doc(this.firestore, `users/${user.uid}`);
            updateDoc(userDocRef, { lastSeen: Date.now() });
          });

          return of(true);
        }
        return of(null);
      })
    ).subscribe();
  }
}
