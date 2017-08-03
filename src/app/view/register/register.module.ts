import {NgModule}   from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';

import {AppTranslationModule} from "app/app.translation.module";
import {routing} from "./register.routing";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RegisterComponent} from "./register.component";


@NgModule({
  imports:[
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    AppTranslationModule,
    routing
  ],
  declarations:[
    RegisterComponent
  ],
})

export class RegisterModule{

}
