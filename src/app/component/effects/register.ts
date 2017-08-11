import {Injectable} from "@angular/core";
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";
import * as actions from '../actions';
import * as constants from '../constants';
import {User} from "../model";
import {RegisterService} from "../service";
import {of} from "rxjs/observable/of";
import 'rxjs/add/operator/throttleTime';
import {GlobalState} from "app/component/global.state";

@Injectable()
export class RegisterEffects {

  constructor(private action$: Actions,
              private registerService: RegisterService,
              private router: Router,
              private state:GlobalState) {
  }

  @Effect()
  login$: Observable<Action>  = this.action$
    .ofType(actions.REGISTER)
    .throttleTime(1000)
    .map(toPayload)
    .switchMap((user: User) => {
      return this.registerService.register(constants.REGISTER_URL, user)
        .map(res => {
          this.router.navigateByUrl('view/main');
          return new actions.RegisterSuccessAction(res.json());
        })
        .catch((err) => {
          if(err.status == 403){
            this.state.register_error_essage$.next(constants.REGISTER_FORBIDDEN_MESSAGE);
          }else{
            this.state.register_error_essage$.next(constants.REGISTER_FAILED_MESSAGE);
          }
          return of(new actions.RegisterFailedAction());
        });
    });

}
