import { Component, effect, inject } from '@angular/core';
import { TableComponent } from '../ui/table/table.component';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../data-access/task.service';
import TaskHeaderComponent from '../task-header/task-header.component';
import { TaskFooterComponent } from '../task-footer/task-footer.component';
import ListComponent from '../../../features/contacts/list/list.component';
import { TaskCursosComponent } from '../task-cursos/task-cursos.component';
import { TaskNosotrosComponent } from '../task-nosotros/task-nosotros.component';
import { TaskCursosGratuitosComponent } from '../task-cursos-gratuitos/task-cursos-gratuitos.component';
import { ToolbarComponent } from '../../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TableComponent, RouterLink,TaskFooterComponent,TaskCursosComponent,
    TaskNosotrosComponent, TaskCursosGratuitosComponent, 
    ],
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
