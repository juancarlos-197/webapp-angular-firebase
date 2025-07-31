import { Router, RouterModule } from '@angular/router';
import { AuthStateService } from './../data-access/auth-state.service';
import { Component, inject } from '@angular/core';
import TaskListComponent from '../../task/features/task-list/task-list.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, ToolbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export default class LayoutComponent {
  private _authState = inject(AuthStateService);
  private router = inject(Router);

  
  onClikcNewContact(): void {

    console.log('Nuevo contacto');

  }

  async logOut() {
    await this._authState.logOut();
    this.router.navigateByUrl('/auth/sign-in')
  }

}
