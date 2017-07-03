import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ViewComponent} from "./view.component";


export const routes: Routes = [
  {
    path: 'view',
    component: ViewComponent,
    children:[
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'login',loadChildren:'./login/login.module#LoginModule'}
    ]
  }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
