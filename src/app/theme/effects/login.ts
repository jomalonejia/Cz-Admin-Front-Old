import {Injectable} from "@angular/core";
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {LoginService} from "app/theme/service/login";
import * as login from '../actions/login';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { of } from 'rxjs/observable/of';
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {LoginUser} from "app/view/login/login.model";
import {isAuth} from '../../view/login/login.util';
import {GlobalState} from "app/theme/global.state";

@Injectable()

export class LoginEffects {

  constructor(private action$: Actions,
              private loginService: LoginService,
              private router:Router,
              private http:Http,
              private state:GlobalState) {
  }

  @Effect()
  login$: Observable<Action>  = this.action$
    .ofType(login.LOGIN)
    .debounceTime(1000)
    .map(toPayload)
    .switchMap((user:LoginUser) => {
      return this.loginService.login('api/user/login',user)
        .map(res => {
          if(isAuth(res.json())){
            this.router.navigateByUrl('view/main');
            return new login.LoginSuccessAction(res.json());
          }else{
            return new login.LoginFailedAction();
          }
        })
    });

  @Effect()
  logout$:Observable<Action> = this.action$
    .ofType(login.LOGOUT)
    .debounceTime(1000)
    .map(toPayload)
    .switchMap(() => {
       return this.loginService.logout('api/user/logout')
         .map(res => {
           this.router.navigateByUrl('login');
           return new login.LogoutSuccessAction(res.json());
         })
    })
}
