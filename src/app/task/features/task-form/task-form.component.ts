import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskCreate, TaskService } from '../../data-access/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export default class TaskFormComponent {
  private formBuilde = inject(FormBuilder);
  private _taskService = inject(TaskService);
  private _router = inject(Router);


  loadig = signal(false)
  formulario = this.formBuilde.group({
    title: this.formBuilde.control('', [Validators.required,]),
    completed: this.formBuilde.control(false, Validators.required),

  })
  async onSubmit() {
    if (this.formulario.invalid) return;
    try {
      console.log(this.formulario.value);
      this.loadig.set(true)
      const { title, completed } = this.formulario.value
      const task: TaskCreate =
      {
        title: title || '',
        completed: !!completed
      }
      this._router.navigateByUrl('/tasks')
    } catch (error) {

    } finally {
      this.loadig.set(false)

    }
  }

}
