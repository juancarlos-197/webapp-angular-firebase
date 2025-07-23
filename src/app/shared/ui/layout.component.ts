import { Component, inject } from '@angular/core';
import {  Router, RouterModule } from '@angular/router';
import { AuthStateService } from '../data-access/auth-state.service';

@Component({
    standalone: true,
      imports: [RouterModule ],
    
    selector: 'app-root',
    template: `
          <button (click)="logOut()"  class="btn btn-danger"  >Salir</button>
      <router-outlet />    

    `
})
export default class LayoutComponent {
  private _authState = inject(AuthStateService);
  private router = inject(Router);

  async logOut() {
    await this._authState.logOut();
    this.router.navigateByUrl('/auth/sign-in')
  }

}