import { NgModule }      from '@angular/core';
import {ViewComponent} from "./view.component";
import {routing} from "./view.routing";
import {ThemeModule} from "app/theme/themeModule";

@NgModule({
  declarations:[ViewComponent],
  imports:[
    ThemeModule,
    routing
  ]
})

export class ViewModule{

}
