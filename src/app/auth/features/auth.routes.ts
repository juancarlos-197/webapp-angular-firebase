import { Routes } from '@angular/router';

const authRoute: Routes = [
    {
        path: 'sign-in',
        loadComponent: () => import('./sign-in/sign-in.component').then(ms => ms.SignInComponent )
    },{
        path: 'sign-up',
        loadComponent: () => import('./sign-up/sign-up.component').then(ms => ms.SignUpComponent )
    }

];
export default authRoute;