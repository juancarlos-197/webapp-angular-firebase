import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatCardModule } from '@angular/material/card';
import { AuthStateService } from './shared/data-access/auth-state.service';
import { SignHeaderComponent } from './auth/features/sign-header/sign-header.component';
import { SignPresentacionComponent } from './auth/features/sign-presentacion/sign-presentacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule,
    

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
