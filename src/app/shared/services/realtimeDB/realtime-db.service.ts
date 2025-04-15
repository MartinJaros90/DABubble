import {inject, Injectable, NgZone, OnDestroy} from '@angular/core';
import {Auth, authState} from '@angular/fire/auth';
import {Database, onDisconnect, ref, update} from '@angular/fire/database';
import {Subscription} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RealtimeDbService implements OnDestroy {

    private auth = inject(Auth);
    private database = inject(Database);
    private ngZone = inject(NgZone);
    private authSubscription: Subscription | null = null;

    trackUserPresence(): void {
        this.authSubscription = authState(this.auth).subscribe(user => {
            if (user) {
                console.log("User is authenticated:", user.uid);

                const userStatusRef = ref(this.database, `users/${user.uid}/status`);

                // Update "online" status
                update(userStatusRef, {online: true, lastSeen: Date.now()})
                    .then(() => console.log("Online status updated"))
                    .catch(error => console.error("Error updating online status:", error));

                // Handle user disconnection properly
                this.ngZone.runOutsideAngular(() => {
                    onDisconnect(userStatusRef).update({online: false, lastSeen: Date.now()})
                        .catch(error => console.error("onDisconnect error:", error));
                });
            } else {
                console.warn("User is not authenticated.");
            }
        });
    }

    async setUserOfflineOnLogout(): Promise<void> {
        const user = this.auth.currentUser;
        if (user) {
            const userStatusRef = ref(this.database, `users/${user.uid}/status`);
            await update(userStatusRef, {online: false, lastSeen: Date.now()});
        }
    }

    stopTracking(): void {
        this.authSubscription?.unsubscribe();
    }

    ngOnDestroy(): void {
        this.stopTracking()
    }
}
