import {Injectable} from "@angular/core";
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {LoginService} from "app/theme/service/login";
import * as login from '../actions/login';
import {User} from "app/view/login/login.model";
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import {Http} from "@angular/http";

@Injectable()

export class LoginEffects {

  constructor(private action$: Actions,
              private loginService: LoginService,
              private http:Http) {
  }

  @Effect()
  login$: Observable<Action> = this.action$
    .ofType(login.LOGIN)
    .debounceTime(1000)
    .map(toPayload)
    .switchMap((user:User) => {
      let body = {'username':user.username,'password':user.password};
      return this.loginService.login('api/user/auth',user)
        .map(res => {
          return new login.LoginSuccessAction(res.json());
        })
    })

}
