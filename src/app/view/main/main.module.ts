import {NgModule}   from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {routing} from "./main.routing";
import {MainComponent} from "app/view/main";

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
