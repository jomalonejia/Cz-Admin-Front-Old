import {NgModule}   from '@angular/core';
import {routing} from "./message.routing";
import {MessageComponent} from "./message.component";
import {MessagesComponent} from "./component";
import {CardComponent} from "./component";
import {ListComponent} from "./component";
import {TextComponent} from "./component";
import {CommonModule} from "@angular/common";


@NgModule({
  imports:[
    CommonModule,
    routing
  ],
  declarations:[
    MessageComponent,
    CardComponent,
    ListComponent,
    MessagesComponent,
    TextComponent
  ]
})

export class MessageModule{

}
