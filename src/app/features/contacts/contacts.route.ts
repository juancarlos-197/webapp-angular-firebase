import { Routes } from '@angular/router';

const contactsRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./list/list.component')
    }
];
export default contactsRoute;