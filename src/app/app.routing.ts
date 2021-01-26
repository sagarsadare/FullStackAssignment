import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// import { AuthGuard } from './_auth/guards/auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
// import { ItemsComponent } from './items/items.component';
// import { LogoutComponent } from './logout/logout.component';

/*
* Routing for the items feature are stored in the items module file
*/

const routes: Routes = [

    // { path: '',  redirectTo: '/dashboard', pathMatch: 'full' }, // catch all route
    { path: 'dashboard', component: DashboardComponent},
    { path: 'login', component: LoginComponent },
    // { path: 'items', component: ItemsComponent },
    // { path: 'logout', component: LogoutComponent },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },

];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
