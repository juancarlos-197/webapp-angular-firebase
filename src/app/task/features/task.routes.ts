import { Routes } from '@angular/router';

const authRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./task-list/task-list.component')
    }
];
export default authRoute;