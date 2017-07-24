import {NgModule} from "@angular/core";
import {SettingsComponent} from "app/view/settings/settings.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AppTranslationModule} from "app/app.translation.module";
import {routing} from './profile.routing';
import {ThemeModule} from "app/theme/themeModule";
import {ProfileComponent} from "./profile.component";

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
    ProfileComponent
  ]
})

export class ProfileModule {

}
