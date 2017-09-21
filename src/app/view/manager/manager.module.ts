import {NgModule}   from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {MdCheckboxModule} from "@angular/material";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {FileUploadModule} from "ng2-file-upload";
import { NguUtilityModule } from 'ngu-utility/ngu-utility.module';
import {ThemeModule} from "app/component/themeModule";
import {routing} from "./manager.routing";

import {ManagerComponent} from './manager.component';
import {UserComponent} from "./component/user";
import {RoleEditorComponent} from "./component/user/component/role.editor.component";

import {UserListService} from "./component/user/userList.service";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    FileUploadModule,
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
    RoleEditorComponent,
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
