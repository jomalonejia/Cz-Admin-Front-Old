import {NgModule}   from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {routing} from "./main.routing";
import {MainComponent} from "app/view/main";
import {ThemeModule} from "app/component/themeModule";

@NgModule({
  imports:[
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations:[
    MainComponent
  ]
})

export class MainModule{

}
