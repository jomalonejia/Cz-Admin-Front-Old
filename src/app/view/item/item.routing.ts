import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {ItemListComponent}  from './component/list';
import {ItemAddComponent} from './component/add';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ItemListComponent},
  {path: 'add', component: ItemAddComponent}
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
