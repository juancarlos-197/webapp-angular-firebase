import { Component, effect, inject, input, OnInit, signal, viewChild } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';



import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FilterComponent } from './filter/filter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TaskDialogoEditarComponent } from '../../task/features/task-dialogo-editar/task-dialogo-editar.component';
import { TaskDialogoEliminarComponent } from '../../task/features/task-dialogo-eliminar/task-dialogo-eliminar.component';
import { APP_CONSTANTS } from '../shared/constants';
const MATERIAL_MODULES =[MatTableModule,MatSortModule,MatPaginatorModule,MatButtonModule,MatIcon]

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MATERIAL_MODULES,FilterComponent ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent<T> implements OnInit {


displayedColumns=input.required<string[]>();
data=input.required<T[]>();
sortableColumns=input<string[]>([]);


dataSource= new MatTableDataSource<T>()
valueToFilter= signal('');
private readonly _sort= viewChild.required<MatSort>(MatSort);
private readonly _paginator= viewChild.required<MatPaginator>(MatPaginator);

    readonly dialog = inject(MatDialog);




constructor(){
  effect(()=>{
    if (this.valueToFilter()) {
      this.dataSource.filter=this.valueToFilter()
    } else{
      this.dataSource.filter='';
    }
  }, {
      allowSignalWrites:true
    }
)
}
ngOnInit(): void {
  this.dataSource.data=this.data();
  this.dataSource.sort=this._sort();
    this.dataSource.paginator=this._paginator();

}


  openDialogTaskEdit(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(TaskDialogoEditarComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

     dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result task editar: ${result}`);
    });
  }
openDialogTaskEliminar(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef =  this.dialog.open(TaskDialogoEliminarComponent, {
      width: '650px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
     dialogRef.afterClosed().subscribe(result => {
      const confirmation = confirm(APP_CONSTANTS.MESSAGES.CONFIRMATION_PROMPT)
      console.log(`Dialog result task eliminar: ${result} ${confirmation} `);
    });
  }
}
