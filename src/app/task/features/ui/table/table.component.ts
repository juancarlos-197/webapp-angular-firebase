import { Component, effect, inject, input, OnInit, ViewChild } from '@angular/core';
import { Task, TaskService } from '../../../data-access/task.service';
import { RouterLink } from '@angular/router';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

import { GridComponent } from '../../../../components/grid/grid.component';
import { ColumnKeys, Contact } from '../../../../features/contacts/contact.interfaces';
import { TaskDialogoEditarComponent } from '../../task-dialogo-editar/task-dialogo-editar.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ GridComponent  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit{
//task= input.required<Task[]>();
public userTaskService = inject(TaskService);

  data :any
  displayedColumns: ColumnKeys<Contact> = ['id', 'title', 'body', 'action'];
  sortables: ColumnKeys<Contact> = ['id', 'title',  'body'];
  
  

  
  constructor(){}



ngOnInit(): void {
    this.getContactosPosts2();

}

    getContactosPosts2(){
      return this.userTaskService.getContactos1().subscribe({
        next:(data)=>{console.log(data)
        this.data=data
        }
      })
    }

    

} 

