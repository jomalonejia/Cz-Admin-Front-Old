import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ViewComponent} from "./view.component";
import {SettingsComponent} from "app/view/settings/settings.component";


export const routes: Routes = [
  {
    path: 'view',
    component: ViewComponent,
    children:[
      {path:'',redirectTo:'main',pathMatch:'full'},
      {path:'main',loadChildren:'./main/main.module#MainModule'},
      {path:'manager',loadChildren:'./manager/manager.module#ManagerModule'},
      {path:'settings', loadChildren:'./settings/settings.module#SettingsModule'},
      {path:'profile', loadChildren:'./profile/profile.module#ProfileModule'},
    ]
  },

]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
