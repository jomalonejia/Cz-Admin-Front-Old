import {NgModule} from "@angular/core";
import {SettingsComponent} from "app/view/settings/settings.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AppTranslationModule} from "app/app.translation.module";
import {routing} from './profile.routing';
import {ThemeModule} from "app/component/themeModule";
import {ProfileComponent} from "./profile.component";
import {FileUploadModule} from "ng2-file-upload";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppTranslationModule,
    FileUploadModule,
    ThemeModule,
    routing
  ],
  declarations: [
    ProfileComponent
  ]
})

export class ProfileModule {

}
