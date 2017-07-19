import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login',loadChildren:'./view/login/login.module#LoginModule'}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
