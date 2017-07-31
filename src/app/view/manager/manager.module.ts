import {NgModule}   from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from "./manager.routing";
import {ManagerComponent} from './manager.component';
import {ThemeModule} from "app/component/themeModule";
import {UserComponent} from "./user";
import {Ng2SmartTableModule} from "ng2-smart-table";
import { NguUtilityModule } from 'ngu-utility/ngu-utility.module';
import {UserListService} from "./user/userList.service";
import {RoleEditorComponent} from "./user/component/role.editor.component";
import {CommonModule} from "@angular/common";
import {MdCheckboxModule} from "@angular/material";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    NguUtilityModule,
    MdCheckboxModule,
    ThemeModule,
    routing
  ],
  declarations: [
    ManagerComponent,
    UserComponent,
    RoleEditorComponent
  ],
  entryComponents:[
    RoleEditorComponent
  ],
  providers:[
    UserListService,
  ]
})

export class ManagerModule {

}
