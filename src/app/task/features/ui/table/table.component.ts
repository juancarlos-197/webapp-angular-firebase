import { Component, effect, inject, input, OnInit, ViewChild } from '@angular/core';
import { Task, TaskService } from '../../../data-access/task.service';
import { RouterLink } from '@angular/router';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterLink, ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit{
//task= input.required<Task[]>();
public userTaskService = inject(TaskService);
 
data :any
constructor(){
  /**effect(()=>{
    console.log('www',this.userTaskService.usersT());
    
  })**/

  this.getPosts();
}
ngOnInit(): void {
 // this.add()
}
/**add()
  {
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response)=>response.json())
.then((json)=>console.log(json))

      
    }
**/
    getPosts(){
      return this.userTaskService.getPosts1().subscribe({
        next:(data)=>{console.log(data)
        this.data=data
        }
      })
    }
} 

