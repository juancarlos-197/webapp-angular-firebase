import { Component, effect, inject, input } from '@angular/core';
import { Task, TaskService } from '../../../data-access/task.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
//task= input.required<Task[]>();
//public userTaskService = inject(TaskService);

constructor(){
 
}
}
