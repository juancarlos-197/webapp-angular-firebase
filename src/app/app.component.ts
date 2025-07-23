import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatCardModule } from '@angular/material/card';
import { AuthStateService } from './shared/data-access/auth-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, MatCardModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private _authState = inject(AuthStateService);
  private router = inject(Router);

  async logOut() {
    await this._authState.logOut();
    this.router.navigateByUrl('/auth/sign-in')
  }

  onClikcNewContact(): void {

    console.log('Nuevo contacto');

  }

}
