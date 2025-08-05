import { inject, Injectable, signal, model, computed } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
// Servicio de Contactos
  private http = inject(HttpClient);
  
  constructor() {
    
      
      
  }




getContactos1(){
  return this.http.get('https://jsonplaceholder.typicode.com/posts')
}
}
