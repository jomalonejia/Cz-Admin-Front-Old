import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  {path: '', redirectTo: 'view', pathMatch: 'full'},
  {path: '**', redirectTo: 'view'}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
