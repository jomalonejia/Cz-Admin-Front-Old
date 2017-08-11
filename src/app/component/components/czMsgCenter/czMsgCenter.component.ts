import {Component} from '@angular/core';
import {CzMsgCenterService} from './czMsgCenter.service';
import {Http} from "@angular/http";
import {Message} from "app/component/model/message";
import {Store} from "@ngrx/store";

import * as reducers from '../../reducers';
import * as messageActions from '../../actions';

@Component({
  selector: 'cz-msg-center',
  providers: [CzMsgCenterService],
  styleUrls: ['czMsgCenter.scss'],
  templateUrl: 'czMsgCenter.html'
})
export class CzMsgCenter {

  public notifications:Array<Object>;
  public messages:Message[]=[];
  username:string = '';

  constructor(private _czMsgCenterService:CzMsgCenterService,
              private store: Store<reducers.State>,
              private http:Http) {

    this.notifications = this._czMsgCenterService.getNotifications();

    this.store.select(reducers.getUsername)
      .subscribe(username => this.username = username);


    this._czMsgCenterService.getMessagesTodos(this.username)
      .map(res => res.json())
      .subscribe(res => {
        res.map(obj => {
          let message = new Message();
          Object.assign(message,
            obj.messages[0],
            {messageId:obj.messages[0]._id},
            {threadId:obj._id});
         this.messages.push(message);
        });
      });

  }

  readMessage(message){
    this.store.dispatch(new messageActions.ReadMessage({threadId:message.threadId,activeUser:message.username}));
  }

}
