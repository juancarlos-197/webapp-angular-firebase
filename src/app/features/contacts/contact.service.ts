import { inject, Injectable } from '@angular/core';
import { addDoc, DocumentData, DocumentReference, orderBy } from 'firebase/firestore';
import { APP_CONSTANTS } from '../../components/shared/constants';
import { Contact } from './contact.interfaces';
import { query } from '@angular/animations';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class ContactService {
    private readonly _firestore = inject(Firestore);
    private readonly _contactCollection = collection(this._firestore, APP_CONSTANTS.COLLECTION_NAME);

    newContact(contact: Partial<Contact>): Promise<DocumentReference<DocumentData, DocumentData>> {
        return addDoc(this._contactCollection, {
            created: Date.now(),
            update: Date.now(),
            ...contact,
        })
    }


}