import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {LoginService} from "../login/loginService";
import {Action, Store} from "@ngrx/store";
import * as reducers　from '../../reducers';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthGuardService implements CanActivate{


  constructor(private store:Store<reducers.State>){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let canactive$ = this.store.select(reducers.getLoggedIn);
    return canactive$;
  }
}

