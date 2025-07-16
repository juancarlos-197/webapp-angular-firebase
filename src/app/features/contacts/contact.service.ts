import { inject, Injectable } from '@angular/core';
import { addDoc, DocumentData, DocumentReference, orderBy } from 'firebase/firestore';
import { APP_CONSTANTS } from '../../components/shared/constants';
import { query } from '@angular/animations';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';



export interface Contact {
id:string;
title:string;

}
export type ContactCreate= Omit<Contact, 'id'>
@Injectable({ providedIn: 'root' })
export class ContactService {
    private  _firestore = inject(Firestore);
    private _contactCollection = collection(this._firestore, 'contacts');

   
 addContact(contact: ContactCreate) {
    console.log('Este')
    return addDoc(this._contactCollection,contact)
  }

}