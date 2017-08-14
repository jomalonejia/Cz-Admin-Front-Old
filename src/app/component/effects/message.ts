import {Injectable} from "@angular/core";
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";
import 'rxjs/add/operator/debounceTime';
import {of} from "rxjs/observable/of";
import * as actions from '../actions';
import * as constants from '../constants';
import {MessageService} from "app/component/service";


@Injectable()
export class MessageEffects {

  constructor(private action$: Actions,
              private router: Router,
              private messageService: MessageService) {

  }

  @Effect()
  toggleMessageUer$: Observable<Action> = this.action$
    .ofType(actions.TOGGLE_MESSAGE_USER)
    .throttleTime(500)
    .map(toPayload)
    .switchMap(obj => {
      let threadId = this.messageService.getMessageThreadId(obj.username,obj.oppositeName);
      if(threadId != null){
        return this.messageService.listMessgesById(threadId)
          .map(res => {
              return new actions.ToggleMessageUserSuccessAction({activeUser:obj.oppositeName,messages:res.json().messages});
          })
          .catch(err => {return of(new actions.ToggleMessageUserFailedAction())});
      }else{
        return this.messageService.listMessages(obj.username, obj.oppositeName)
          .map(res => {
              let response = res.json()[0];
              this.messageService.setMessageThreadId(obj.username,obj.oppositeName,response._id);
              return new actions.ToggleMessageUserSuccessAction({activeUser:obj.oppositeName,messages:response.messages});
          })
          .catch(err => {console.log(err);return of(new actions.ToggleMessageUserFailedAction())});
      }
    });

  @Effect()
  readMessage$: Observable<Action> = this.action$
    .ofType(actions.READ_MESSAGE)
    .throttleTime(1000)
    .map(toPayload)
    .switchMap(obj => {
      return this.messageService.readMessage(constants.KOA_READMESSAGE_URL, obj.threadId)
        .map(res => {
          this.router.navigateByUrl('/view/message');
          return new actions.ReadMessageSuccess({activeUser: obj.activeUser, messages: res.json()});
        })
    });

}
