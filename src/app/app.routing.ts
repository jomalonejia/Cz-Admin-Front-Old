import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  {path: '', redirectTo: 'view', pathMatch: 'full'},
  {path:'login',loadChildren:'./view/login/login.module#LoginModule'},
  {path:'register',loadChildren:'./view/register/register.module#RegisterModule'},
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
