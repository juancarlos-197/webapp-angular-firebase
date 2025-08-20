import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-task-dialogo-eliminar',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './task-dialogo-eliminar.component.html',
  styleUrl: './task-dialogo-eliminar.component.scss'
})
export class TaskDialogoEliminarComponent {





}
