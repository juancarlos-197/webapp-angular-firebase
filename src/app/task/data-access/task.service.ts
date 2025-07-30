import { inject, Injectable, signal } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { toSignal } from '@angular/core/rxjs-interop';

import { addDoc, collection, } from 'firebase/firestore';
import { Observable } from 'rxjs';
export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export type TaskCreate = Omit<Task, 'id'>
const PATH = 'tasks'
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _firestore = inject(Firestore);


// private _collection = collection(this._firestore, PATH);


 /*** getTasks= toSignal(collectionData(this._collection)as Observable<Task[]>,{
  initialValue:[]
 }
 )**/
/**  create(task: TaskCreate) {
    return addDoc(this._collection, task)
  }*/

}
