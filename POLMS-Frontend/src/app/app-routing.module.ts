import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin-page/admin-page.module').then(m => m.AdminPageModule)
  },
  {
    path: 'nco',
    loadChildren: () => import('./nco-page/nco-page.module').then(m => m.NcoPageModule)
  },
  {
    path: 'driver',
    loadChildren: () => import('./driver-page/driver-page.module').then(m => m.DriverPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
