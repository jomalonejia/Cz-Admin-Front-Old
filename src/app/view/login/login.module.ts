import {NgModule}   from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';

import {LoginComponent} from "./login.component";
import {AppTranslationModule} from "app/app.translation.module";
import {routing} from "./login.routing";
import {AuthHttp, AuthConfig, JwtHelper} from 'angular2-jwt';


@NgModule({
  imports:[
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppTranslationModule,
    routing
  ],
  declarations:[
    LoginComponent
  ]
})

export class LoginModule{

}
