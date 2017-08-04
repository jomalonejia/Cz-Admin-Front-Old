import {Component, Input} from "@angular/core";
import {Message} from "app/component/model/message";

@Component({
  selector:'message-messages',
  templateUrl:'./messages.component.html',
  styleUrls:['./messages.component.scss']
})

export class MessagesComponent{
  @Input() messages:Message[];
}
