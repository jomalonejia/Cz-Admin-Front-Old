import {Component, EventEmitter, Input, Output} from "@angular/core";
import {MessageUser} from "app/view/message/model/message.user";
import {Store} from "@ngrx/store";
import * as reducers from 'app/component/reducers';
import * as messageAction from 'app/component/actions/message';
import {Observable} from "rxjs/Observable";

@Component({
  selector:'message-list',
  templateUrl:'./list.component.html',
  styleUrls:['./list.component.scss']
})

export class ListComponent{
  @Input() friends:MessageUser[];
  @Output() toggleUsername:EventEmitter<string> = new EventEmitter();

  activeUser$:Observable<string>;

  constructor(private store:Store<reducers.State>){
    this.activeUser$ = store.select(reducers.getActiveUser);
  }

  toggleUser(username:string){
    this.store.dispatch(new messageAction.ToggleMessageUserAction(username));
    this.toggleUsername.next(username);
  }
}
