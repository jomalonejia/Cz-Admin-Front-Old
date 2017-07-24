import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import * as reducers from '../../reducers';
import * as layoutAction from '../../actions/layout';
import * as loginAction from '../../actions/login';
import {Router} from "@angular/router";


@Component({
  selector: 'cz-page-top',
  templateUrl: './czPageTop.html',
  styleUrls: ['./czPageTop.scss']
})

export class CzPageTop {

  isMenuCollapsed$: Observable<boolean>;
  isLoggedIn$:Observable<boolean>;
  profile$:Observable<string>;

  constructor(private store: Store<reducers.State>,
              private router:Router) {
    this.isLoggedIn$ = this.store.select(reducers.getLoggedIn);
    this.profile$ = this.store.select(reducers.getImgUrl);
  }


  toggleMenu() {
    this.store.dispatch(new layoutAction.ToggleMenuAction);
    return false;
  }

  logout() {
    this.store.dispatch(new loginAction.LogoutAction);
    this.router.navigateByUrl('view');
    return false;
  }
}
