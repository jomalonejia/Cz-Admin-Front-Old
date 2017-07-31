import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AuthGuardActive} from "../../component/service/routerActive";
import {ProfileComponent} from "./profile.component";

export const routes : Routes = [
  {
    path:'',
    component:ProfileComponent,
    canActivate:[AuthGuardActive]
  }
]

export const routing : ModuleWithProviders = RouterModule.forChild(routes);
