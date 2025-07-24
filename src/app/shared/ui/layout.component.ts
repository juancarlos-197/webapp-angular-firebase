import { Router, RouterModule } from '@angular/router';
import { AuthStateService } from './../data-access/auth-state.service';
import { Component, inject } from '@angular/core';
import TaskListComponent from '../../task/features/task-list/task-list.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export default class LayoutComponent {
  private _authState = inject(AuthStateService);
  private router = inject(Router);

  async logOut() {
    await this._authState.logOut();
    this.router.navigateByUrl('/auth/sign-in')
  }

}
