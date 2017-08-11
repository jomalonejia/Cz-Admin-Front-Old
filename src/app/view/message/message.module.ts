import {NgModule}   from '@angular/core';
import { MomentModule } from 'angular2-moment';
import {routing} from "./message.routing";
import {MessageComponent} from "./message.component";
import {MessagesComponent} from "./component";
import {CardComponent} from "./component";
import {ListComponent} from "./component";
import {TextComponent} from "./component";
import {CommonModule} from "@angular/common";
import {ThemeModule} from "app/component/themeModule";


@NgModule({
  imports:[
    CommonModule,
    ThemeModule,
    MomentModule,
    routing
  ],
  declarations:[
    MessageComponent,
    CardComponent,
    ListComponent,
    MessagesComponent,
    TextComponent,
  ],
  providers:[
  ]
})

export class MessageModule{

}
