import {Component} from '@angular/core';

import {CzMsgCenterService} from './czMsgCenter.service';

@Component({
  selector: 'cz-msg-center',
  providers: [CzMsgCenterService],
  styleUrls: ['czMsgCenter.scss'],
  templateUrl: 'czMsgCenter.html'
})
export class CzMsgCenter {

  public notifications:Array<Object>;
  public messages:Array<Object>;

  constructor(private _czMsgCenterService:CzMsgCenterService) {
    this.notifications = this._czMsgCenterService.getNotifications();
    this.messages = this._czMsgCenterService.getMessages();

    console.log(this.notifications);
  }

}
