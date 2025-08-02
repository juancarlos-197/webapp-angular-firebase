import { inject, Injectable, signal, model, computed } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { toSignal } from '@angular/core/rxjs-interop';
import { addDoc, collection, } from 'firebase/firestore';
import { delay, Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserResponseTaskModel, UserTaskModel } from '../data-models/task-model';
export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export type TaskCreate = Omit<Task, 'id'>
const PATH = 'tasks'



interface State {
  users: UserTaskModel[];
  loading: boolean;

}



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //private _firestore = inject(Firestore);
  #state = signal<State>({
    users: [],
    loading: true
  })
  public usersT = computed(() => this.#state().users)
  public loadingT = computed(() => this.#state().loading)


  constructor(private httpClient: HttpClient) { }

  public getSettingsInfos(userId: number): Observable<any> {
    return this.httpClient.get<any>(`/settings/${userId}`);
  }
 

  // private _collection = collection(this._firestore, PATH);


  /*** getTasks= toSignal(collectionData(this._collection)as Observable<Task[]>,{
   initialValue:[]
  }
  )**/
  /**  create(task: TaskCreate) {
      return addDoc(this._collection, task)
    }*/

}
