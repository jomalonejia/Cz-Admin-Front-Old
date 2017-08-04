import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import * as $ from 'jquery';
import * as consts from './component/constants';
import * as actions from './component/actions';
import * as reducers from './component/reducers';
import {LoginService} from "app/component/service/login";
import {tokenNotExpired} from "angular2-jwt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  isMenuCollapsed$: Observable<boolean>;

  constructor(private store: Store<reducers.State>) {
   /* let token = JSON.parse(localStorage.getItem('login'))['token'];
    console.log(token);*/
    // console.log(tokenNotExpired(JSON.parse(localStorage.getItem('login'))['token']));
    // console.log(tokenNotExpired(consts.TOKEN_NAME));
   /* if (!tokenNotExpired(consts.TOKEN_NAME)) {
      this.store.dispatch(new actions.LogoutAction);
    }*/
    this.isMenuCollapsed$ = this.store.select(reducers.getIsCollapsed);

  }
}
