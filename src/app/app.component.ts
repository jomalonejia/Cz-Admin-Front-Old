import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import * as $ from 'jquery';
import * as actions from './theme/actions';
import * as reducers from './theme/reducers';
import {LoginService} from "app/theme/service/login";
import {tokenNotExpired} from "angular2-jwt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  isMenuCollapsed$:Observable<boolean>;

  constructor(private store:Store<reducers.State>) {
    if(!tokenNotExpired('cz-admin-token')){
      this.store.dispatch(new actions.LogoutAction);
    }
    this.isMenuCollapsed$ = this.store.select(reducers.getIsCollapsed);

  }
}
