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
        apiKey: "AIzaSyAOcV3fihl-DAYMVXSbkxHq2E5djll5mfs",
        authDomain: "dabubble-826b4.firebaseapp.com",
        databaseURL: "https://dabubble-826b4-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "dabubble-826b4",
        storageBucket: "dabubble-826b4.firebasestorage.app",
        messagingSenderId: "943978163562",
        appId: "1:943978163562:web:50493f4ae483fefde6c913"
      })), 
      provideAuth(() => getAuth()), 
      provideFirestore(() => getFirestore()), 
      provideDatabase(() => getDatabase()), 
      provideAnimationsAsync()],
};
