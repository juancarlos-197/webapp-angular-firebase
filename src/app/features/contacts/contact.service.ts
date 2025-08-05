import { inject, Injectable } from '@angular/core';
import { addDoc, DocumentData, DocumentReference, orderBy } from 'firebase/firestore';
import { APP_CONSTANTS } from '../../components/shared/constants';
import { query } from '@angular/animations';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';




@Injectable({ providedIn: 'root' })
export class ContactService {
// no hay nada aun 

}