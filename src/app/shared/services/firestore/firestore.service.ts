import {inject, Injectable} from '@angular/core';
import {
    addDoc,
    collection,
    collectionData,
    deleteDoc,
    doc,
    docData,
    Firestore,
    updateDoc
} from '@angular/fire/firestore';
import {Observable} from 'rxjs/internal/Observable';
import {User} from '../../interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})

export class FirestoreService {
    private firestore = inject(Firestore)

    constructor() {
    }

    getUserData() {
        return collection(this.firestore, `users`);
    }

    getSingleDocRef(colid: string, docId: string) {
        return doc(collection(this.firestore, colid), docId)
    }

    setUserObject(obj: any, uId: string): User {
        return {
            displayName: obj.displayName || "Gast",
            email: obj.email || "beispielname@email.com",
            photoURL: obj.photoURL || "assets/lukas-icons/profile-card/avatar-0.svg",
            uId: uId
        }
    }

    async addDocument(collectionName: string, data: any) {
        try {
            const colRef = collection(this.firestore, collectionName);
            const docRef = await addDoc(colRef, data);
            console.log('Document added with ID:', docRef.id);
            return docRef.id;
        } catch (error) {
            return console.error('Error adding document:', error);
        }
    }

    getDocument(collectionName: string, docId: string): Observable<any> {
        const docRef = doc(this.firestore, `${collectionName}/${docId}`);
        return docData(docRef, {idField: 'id'});
    }

    getCollection(collectionName: string): Observable<any[]> {
        const colRef = collection(this.firestore, collectionName);
        return collectionData(colRef, {idField: 'id'});
    }

    async updateDocumentField(collectionName: string, docId: string, field: string, newValue: string) {
        try {
            const docRef = doc(this.firestore, `${collectionName}/${docId}`);
            await updateDoc(docRef, {[field]: newValue});
            console.log('Document updated successfully!');
        } catch (error) {
            console.error('Error updating document:', error);
        }
    }

    async deleteDocument(collectionName: string, docId: string) {
        try {
            const docRef = doc(this.firestore, `${collectionName}/${docId}`);
            await deleteDoc(docRef);
            console.log('Document deleted successfully!');
        } catch (error) {
            console.error('Error deleting document:', error);
        }
    }
}
