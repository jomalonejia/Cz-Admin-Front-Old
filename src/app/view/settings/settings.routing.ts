import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AuthGuardActive} from "../../theme/service/routerActive";
import {SettingsComponent} from "./settings.component";

export const routes : Routes = [
  {
    path:'',
    component:SettingsComponent,
    canActivate:[AuthGuardActive]
  }
]

export const routing : ModuleWithProviders = RouterModule.forChild(routes);
