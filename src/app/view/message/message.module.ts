import {NgModule}   from '@angular/core';
import {routing} from "./message.routing";
import {MessageComponent} from "./message.component";
import {MessagesComponent} from "./component";
import {CardComponent} from "./component";
import {ListComponent} from "./component";
import {TextComponent} from "./component";
import {CommonModule} from "@angular/common";
import {MessageService} from "./message.service";
import {CzProfilePipe} from "app/component/pipe/czProfile";
import {ThemeModule} from "app/component/themeModule";


@NgModule({
  imports:[
    CommonModule,
    ThemeModule,
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
    MessageService,
  ]
})

export class MessageModule{

}
