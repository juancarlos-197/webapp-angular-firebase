import { Component, effect, inject } from '@angular/core';
import { TableComponent } from '../ui/table/table.component';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../data-access/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TableComponent, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export default class TaskListComponent {
  //tasks = inject(TaskService).getTasks;
  constructor() {
 /** effect(()=>{
console.log('', );

})*/ 
  }
}
