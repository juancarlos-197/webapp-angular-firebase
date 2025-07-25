import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskCreate, TaskService } from '../../data-access/task.service';

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

 formulario = this.formBuilde.group({
    title: this.formBuilde.control('', [Validators.required, ]),
    completed: this.formBuilde.control(false, Validators.required),

  })
async onSubmit(){
 if (this.formulario.invalid) return;
try {
   console.log(this.formulario.value);

   const {title,completed}=this.formulario.value
  const task :TaskCreate=
  {
    title:title || '',
    completed:!!completed
  }

} catch (error) {
  
} 
}

}
