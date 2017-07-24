import {NgModule}   from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';

import {LoginComponent} from "./login.component";
import {AppTranslationModule} from "app/app.translation.module";
import {routing} from "./login.routing";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


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
    LoginComponent
  ]
})

export class LoginModule{

}
