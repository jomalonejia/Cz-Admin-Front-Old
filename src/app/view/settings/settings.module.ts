import {NgModule} from "@angular/core";
import {SettingsComponent} from "app/view/settings/settings.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AppTranslationModule} from "app/app.translation.module";
import {routing} from './settings.routing';
import {ThemeModule} from "app/component/themeModule";
import {SettingsService} from "app/view/settings/settings.service";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppTranslationModule,
    ThemeModule,
    routing
  ],
  declarations: [
    SettingsComponent
  ],
  providers:[
    SettingsService
  ]
})

export class SettingsModule {

}
