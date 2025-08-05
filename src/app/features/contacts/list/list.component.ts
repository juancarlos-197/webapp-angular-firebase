import { Component, inject, OnInit } from '@angular/core';
import { GridComponent } from '../../../components/grid/grid.component';
import { ColumnKeys, Contact } from '../contact.interfaces';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../../task/data-access/task.service';




@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent, ReactiveFormsModule,
    MatSlideToggleModule, MatSlideToggleModule, ReactiveFormsModule,
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,
    MatButtonModule,MatIconModule,RouterLink
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export default class ListComponent implements OnInit {
public userTaskService = inject(TaskService);


  data :any
  displayedColumns: ColumnKeys<Contact> = ['id', 'title','body', 'action'];
  sortables: ColumnKeys<Contact> = ['id', 'title', 'body'];

  ngOnInit(): void {
    // get a reference to the user-profile collection
    //const userProfileCollection = collection(this.firestore, 'users');
    // get documents (data) from the collection using collectionData
    //   this.users$ = collectionData(userProfileCollection) as Observable<any[]>;
    this.getPosts()
  }
  getPosts(){
      return this.userTaskService.getPosts1().subscribe({
        next:(data)=>{console.log(data)
        this.data=data
        }
      })
    }

  async onSubmit() {
    
  }


}

