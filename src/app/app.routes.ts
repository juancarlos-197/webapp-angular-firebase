import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', redirectTo:'/auth',pathMatch:'full' },

    { path:'auth', loadChildren:()=> import('./auth/features/auth.routes')},
         { path:'tasks', 
            loadChildren:()=> import('./task/features/task.routes')},

     { path:'contacts', loadChildren:()=> import('./features/contacts/contacts.route')},

    { path:'**',redirectTo:'/tasks'}
];
