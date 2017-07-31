import {RouterModule, Routes} from "@angular/router";
import {ManagerComponent} from "./manager.component";
import {ModuleWithProviders} from "@angular/core";
import {UserComponent} from "./user";

const routes:Routes = [
  {path:'', redirectTo:'user',pathMatch:'full'},
  {path:'user',component:UserComponent}
]

export const routing:ModuleWithProviders = RouterModule.forChild(routes);
