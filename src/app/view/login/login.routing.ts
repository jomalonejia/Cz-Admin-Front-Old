import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from "./login.component";
import {CanLoginActivate} from "../../theme/service";

export const routes : Routes = [
  {
    path:'',
    component:LoginComponent,
  }
]

export const routing : ModuleWithProviders = RouterModule.forChild(routes);
