import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export interface User {
  email: string;
  password: string;

}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth = inject(Auth);
  signUp(user: User) {
    return createUserWithEmailAndPassword(this._auth, user.email, user.password)
  }
}
