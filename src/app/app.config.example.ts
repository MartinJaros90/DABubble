import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideFirebaseApp(() =>
            initializeApp({
                apiKey: 'YOUR_API_KEY',
                authDomain: 'YOUR_PROJECT.firebaseapp.com',
                databaseURL: 'YOUR_DATABASE_URL',
                projectId: 'YOUR_PROJECT_ID',
                storageBucket: 'YOUR_STORAGE_BUCKET',
                messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
                appId: 'YOUR_APP_ID',
            })
        ),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase()),
        provideAnimationsAsync(),
    ],
};
