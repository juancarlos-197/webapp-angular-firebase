import { FormGroup, Validators} from '@angular/forms';
export const isRequired = (field:'email' | 'password', formulario:FormGroup)=>{
    const control=formulario.get(field);
    return control && control.touched && control.hasError('required');
}

export const hasEmailError = (formulario:FormGroup)=>{
    const control=formulario.get('email');
    return control && control?.touched && control.hasError('email');
}