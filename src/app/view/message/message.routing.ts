import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AuthGuardActive} from "app/component/service/routerActive";
import {MessageComponent} from "./message.component";

export const routes : Routes = [
  {
    path:'',
    canActivate:[AuthGuardActive],
    component:MessageComponent
  }
]

export const routing : ModuleWithProviders = RouterModule.forChild(routes);
