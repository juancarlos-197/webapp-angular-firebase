import { Component, inject, OnInit } from '@angular/core';
import { GridComponent } from '../../../components/grid/grid.component';
import { ColumnKeys, Contact } from '../contact.interfaces';
import { ContactCreate, ContactService } from '../contact.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AsyncPipe } from '@angular/common';
import { Observable, tap } from 'rxjs';
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



const ELEMENT_DATA: any[] = [
  { id: 1, name: 'Hydrogen', email: 1.0079, phone: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent, ReactiveFormsModule,
    MatSlideToggleModule, MatSlideToggleModule, ReactiveFormsModule,
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,
    MatButtonModule,MatIconModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  data = ELEMENT_DATA;
  displayedColumns: ColumnKeys<Contact> = ['id', 'name', 'phone', 'email', 'action'];
  sortables: ColumnKeys<Contact> = ['id', 'name', 'phone', 'email'];
  private formBuilde = inject(FormBuilder)
  private _contactSVC = inject(ContactService);

  formulario = this.formBuilde.group({
    title: ['', [Validators.required]],
  });
  ngOnInit(): void {
    // get a reference to the user-profile collection
    //const userProfileCollection = collection(this.firestore, 'users');
    // get documents (data) from the collection using collectionData
    //   this.users$ = collectionData(userProfileCollection) as Observable<any[]>;
  }
  async onSubmit() {
    if (this.formulario.value) return
    console.log('contacto', this.formulario.value);

    try {
      const { title } = this.formulario.value;
      const contact: ContactCreate = {
        title: title || ''
      }
      await this._contactSVC.addContact(contact)
    } catch (error) {}
  }
}

