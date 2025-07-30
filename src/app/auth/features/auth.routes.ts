import { Routes } from '@angular/router';

const authRoute: Routes = [
    {
        path: 'sign-in',
        loadComponent: () => import('./sign-in/sign-in.component')
    },{
        path: 'sign-up',
        loadComponent: () => import('./sign-up/sign-up.component')
    }
];
export default authRoute;