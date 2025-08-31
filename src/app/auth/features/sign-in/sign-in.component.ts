import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
;
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatTable, MatTableModule } from '@angular/material/table';
import { hasEmailError, isRequired } from '../../utils/valitadators';
import { AuthService } from '../../data-access/auth.service';
import { Router, RouterLink } from '@angular/router';
import { GooleButtonComponent } from '../../ui/goole-button/goole-button.component';
import { SignHeaderComponent } from '../sign-header/sign-header.component';
import { TaskFooterComponent } from '../../../task/features/task-footer/task-footer.component';
import { SignPresentacionComponent } from '../sign-presentacion/sign-presentacion.component';
import { SignMensajesContactoComponent } from '../sign-mensajes-contacto/sign-mensajes-contacto.component';
import { SignPresentarComponent } from '../sign-presentar/sign-presentar.component';
import { CommonModule } from '@angular/common';

interface FormSignIn {
  email: FormControl<string | null>;
  password: FormControl<string | null>;

}

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatFormFieldModule,
    MatInputModule, ReactiveFormsModule, MatToolbarModule, MatButtonModule, MatIconModule,
    MatTableModule, RouterLink, GooleButtonComponent,TaskFooterComponent ,SignPresentacionComponent,
    SignHeaderComponent, SignMensajesContactoComponent, SignPresentarComponent,CommonModule
 ],

  templateUrl: './sign-in.component.html',
  styles: ``
})
export default class SignInComponent {


  private formBuilde = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);

  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.formulario)
  }
  hasEmailError() {
    return hasEmailError(this.formulario)
  }
  formulario = this.formBuilde.group<FormSignIn>({
    email: this.formBuilde.control('', [Validators.required, Validators.email]),
    password: this.formBuilde.control('', Validators.required),

  })


  async onSubmit() {
   console.log('contacto', this.formulario.getRawValue());
      if (this.formulario.invalid) return;
    try {
      const { email, password } = this.formulario.value;

      if (!email || !password) return;
      await this._authService.signIn({ email, password }),
        this._router.navigateByUrl('/tasks')
    } catch (error) {

    }


  }

  
async  signInWithGoogle(){
  try {
    await this._authService.signInWithGoogle()
  } catch (error) {
    
  }
}


}
