import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ViewComponent} from "./view.component";
import {AuthGuardService} from "app/theme/service/routerActive";


export const routes: Routes = [
  {
    path: 'view',
    component: ViewComponent,
    canActivate: [AuthGuardService],
    children:[
      {path:'',redirectTo:'main',pathMatch:'full'},
      {path:'main',loadChildren:'./main/main.module#MainModule'},
    ]
  }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
