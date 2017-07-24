import { NgModule }      from '@angular/core';
import {ViewComponent} from "./view.component";
import {routing} from "./view.routing";
import {ThemeModule} from "app/theme/themeModule";
import {AppTranslationModule} from "app/app.translation.module";
import {CommonModule} from "@angular/common";
import {JwtHelper} from "angular2-jwt";
import {SettingsComponent} from "app/view/settings/settings.component";

@NgModule({
  declarations:[
    ViewComponent,
  ],
  imports:[
    CommonModule,
    ThemeModule,
    AppTranslationModule,
    routing
  ],
  providers: [
    JwtHelper
  ]
})

export class ViewModule{

}
