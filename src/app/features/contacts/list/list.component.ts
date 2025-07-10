import { Component, inject, OnInit } from '@angular/core';
import { GridComponent } from '../../../components/grid/grid.component';
import { ColumnKeys, Contact } from '../contact.interfaces';
import { ContactService } from '../contact.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AsyncPipe } from '@angular/common';
import { Observable, tap } from 'rxjs';
const ELEMENT_DATA: any[] = [
  {id: 1, name: 'Hydrogen', email: 1.0079, phone: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
  data=ELEMENT_DATA;
  displayedColumns: ColumnKeys<Contact> = ['id', 'name', 'phone', 'email', 'action'];
  sortables: ColumnKeys<Contact> = ['id', 'name', 'phone', 'email'];
    private readonly _contactSVC = inject(ContactService);
   
   
ngOnInit(): void {
  
       // get a reference to the user-profile collection
        //const userProfileCollection = collection(this.firestore, 'users');

        // get documents (data) from the collection using collectionData
     //   this.users$ = collectionData(userProfileCollection) as Observable<any[]>;
   }
   getAllContast(){
    
   }
}

