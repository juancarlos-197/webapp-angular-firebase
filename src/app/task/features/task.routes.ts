import { Routes } from '@angular/router';

const authRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./task-list/task-list.component')
    }, 
     {
        path: 'new',
        loadComponent: () => import('./task-form/task-form.component')
    }, 
     {
        path: 'edit/:id',
        loadComponent: () => import('./task-form/task-form.component')
    }
];
export default authRoute;