import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
// import { ItemsComponent } from './items/items.component';
import { RegisterComponent } from './register/register.component';
import { DashboardAuthGuard } from './auth/dashboard.auth.guard';
import { LoginAuthGuard } from './auth/login.auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent ,canActivate:[LoginAuthGuard] },
  { path: 'dashboard', component: DashboardComponent,canActivate:[DashboardAuthGuard] },
  // { path: 'items', component: ItemsComponent,canActivate:[DashboardAuthGuard] },
  { path: 'register', component: RegisterComponent,canActivate:[LoginAuthGuard] },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
