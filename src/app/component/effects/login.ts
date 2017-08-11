import {Injectable} from "@angular/core";
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {LoginService} from "app/component/service/login";
import * as login from '../actions/login';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { of } from 'rxjs/observable/of';
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {LoginUser} from "app/view/login/login.model";
import {GlobalState} from "app/component/global.state";
import * as constants from '../constants';

@Injectable()

export class LoginEffects {

  constructor(private action$: Actions,
              private loginService: LoginService,
              private router:Router,
              private state:GlobalState) {
  }

  @Effect()
  login$: Observable<Action>  = this.action$
    .ofType(login.LOGIN)
    .throttleTime(1000)
    .map(toPayload)
    .switchMap((user:LoginUser) => {
      return this.loginService.login(constants.LOGIN_URL,user)
        .map(res => {
          this.router.navigateByUrl('view/main');
          return new login.LoginSuccessAction(res.json());
        })
        .catch((err) => {
          if(err.status == constants.UNAUTHORIZED){
            this.state.login_error_essage$.next(constants.LOGIN_FAILED_MESSAGE);
          }
          return of(new login.LoginFailedAction());
          });
    });

  @Effect()
  logout$:Observable<Action> = this.action$
    .ofType(login.LOGOUT)
    .throttleTime(1000)
    .map(toPayload)
    .switchMap(() => {
       return this.loginService.logout(constants.LOGOUT_URL)
         .map(res => {
           this.router.navigateByUrl('login');
           return new login.LogoutSuccessAction(res.json());
         })
    })
}
