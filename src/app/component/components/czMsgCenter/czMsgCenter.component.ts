import {Component} from '@angular/core';
import {CzMsgCenterService} from './czMsgCenter.service';
import {Http} from "@angular/http";
import {Message} from "app/component/model/message";

@Component({
  selector: 'cz-msg-center',
  providers: [CzMsgCenterService],
  styleUrls: ['czMsgCenter.scss'],
  templateUrl: 'czMsgCenter.html'
})
export class CzMsgCenter {

  public notifications:Array<Object>;
  public messages:Message[]=[];

  constructor(private _czMsgCenterService:CzMsgCenterService,private http:Http) {
    this.notifications = this._czMsgCenterService.getNotifications();
    this.http.get('/koa/listMessagesTodo')
      .map(res => res.json())
      .subscribe(res => {
        res.map(obj => {
          let message = new Message();
          Object.assign(message,obj.messages[0]);
         this.messages.push(message);
        });
      });


   // this.messages = this._czMsgCenterService.getMessages();
  }

}
