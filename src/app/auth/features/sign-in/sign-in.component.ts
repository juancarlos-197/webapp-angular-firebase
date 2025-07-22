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
import { toast } from 'ngx-sonner';

interface FormSignUp {
  email: FormControl<string | null>;
  password: FormControl<string | null>;

}

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatFormFieldModule,
    MatInputModule, ReactiveFormsModule, MatToolbarModule, MatButtonModule, MatIconModule,
    MatTableModule,],

  templateUrl: './sign-in.component.html',
  styles: ``
})
export class SignInComponent {


  private formBuilde = inject(FormBuilder);
  private _authService = inject(AuthService);

  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.formulario)
  }
  hasEmailError() {
    return hasEmailError(this.formulario)
  }
  formulario = this.formBuilde.group<FormSignUp>({
    email: this.formBuilde.control('', [Validators.required, Validators.email]),
    password: this.formBuilde.control('', Validators.required),

  })


  async onSubmit() {

    try {
      console.log('contacto', this.formulario.getRawValue());
      if (this.formulario.invalid) return;
      const { email, password } = this.formulario.value;

      if (!email || !password) return;
      await this._authService.signUp({ email, password })
    } catch (error) {

    }


  }
}
