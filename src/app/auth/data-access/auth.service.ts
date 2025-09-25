import { inject, Injectable } from '@angular/core';
import {
  Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider
} from '@angular/fire/auth';

import { HttpClient, HttpClientModule } from '@angular/common/http';

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

  signIn(user: User) {
    return signInWithEmailAndPassword(this._auth, user.email, user.password)
  }

  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this._auth, provider)
  }

   private http = inject(HttpClient);
  
    constructor() {}
  
    getGoogleMaps() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }

}
