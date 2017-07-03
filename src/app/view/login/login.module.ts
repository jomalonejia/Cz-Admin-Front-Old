import {NgModule}   from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from "app/view/login";
import {routing} from "./routing";

@NgModule({
  imports:[
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations:[
    LoginComponent
  ]
})

export class LoginModule{

}
