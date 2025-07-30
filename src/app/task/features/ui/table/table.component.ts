import { Component, effect, input } from '@angular/core';
import { Task } from '../../../data-access/task.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
task= input.required<Task[]>();

constructor(){
  effect(()=>{
    console.log(this.task());
    
  })
}
}
