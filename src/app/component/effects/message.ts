import {Injectable} from "@angular/core";
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";
import 'rxjs/add/operator/debounceTime';
import * as actions from '../actions';
import * as constants from '../constants';
import {MessageService} from "app/component/service";

@Injectable()
export class MessageEffects {

  constructor(private action$: Actions,
              private router: Router,
              private messageService:MessageService) {

  }

  @Effect()
    toggleMessageUer$:Observable<Action> = this.action$
      .ofType(actions.TOGGLE_MESSAGE_USER)
      .debounceTime(800)
      .map(toPayload)
      .switchMap(obj => {
        let threadId = this.messageService.getMessageThreadId(obj.username,obj.oppositeName);
        console.log(threadId);
        if (threadId != null) {
          return this.messageService.listMessgesById(threadId)
            .map(res => {
              if(res.json().messages.length>0){
                  return new actions.ToggleMessageUserSuccessAction(res.json().messages);
                }
            })
        } else {
          return this.messageService.listMessages(obj.username, obj.oppositeName)
            .map(res => {
              if (res.json()[0]) {
                this.messageService.setMessageThreadId(obj.username, obj.oppositeName, res[0]._id);
                if (res.json()[0].messages.length > 0) {
                  return new actions.ToggleMessageUserSuccessAction(res[0].messages);
                }
              }
              else {
                this.messageService.setMessageThreadId(obj.username, obj.oppositeName, res.json()._id);
                if (res && res.json().messages.length > 0) {
                  return new actions.ToggleMessageUserSuccessAction(res.json().messages);
                }
              }
            });
        }
      })

  @Effect()
    readMessage$: Observable<Action>  = this.action$
      .ofType(actions.READ_MESSAGE)
      .throttleTime(1000)
      .map(toPayload)
      .switchMap((obj) => {
          return this.messageService.readMessage(constants.KOA_READMESSAGE_URL,obj.threadId)
            .map(res => {
              this.router.navigateByUrl('/view/message');
              return new actions.ReadMessageSuccess({activeUser:obj.activeUser,messages:res.json()});
            })
      });

  }
