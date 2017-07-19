import {Component} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, AbstractControl, Validators} from '@angular/forms';
import {Http, RequestOptions, URLSearchParams, Headers} from '@angular/http';
import {JwtHelper} from 'angular2-jwt';
import {User} from "./login.model";
import {Router} from '@angular/router';
import {isUndefined} from "util";
import {LoginService} from "app/theme/service/login";
import {Store} from "@ngrx/store";
import * as reducers from '../../theme/reducers';
import * as loginAction from '../../theme/actions/login';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent {
  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  isShow: boolean;

  constructor(private fb: FormBuilder,
              private jwtHelper: JwtHelper,
              private router:Router,
              private store:Store<reducers.State>,
              private loginService:LoginService
              ) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() {

    let token = localStorage.getItem('token');
    if (token != null) {
     // this.isShow = !this.jwtHelper.isTokenExpired(token);
    }
  }

  public login(user: User): void {
    this.submitted = true;
    if (this.form.valid) {
      let body: URLSearchParams = new URLSearchParams();
      body.set('username', user.username);
      body.set('password', user.password);
      this.store.dispatch(new loginAction.LoginAction(user));
      this.router.navigateByUrl('view/main');
    }
  }

  public logout(user: User): void {
   localStorage.removeItem('token');
  }

  public test(): void {
    let myHeader = new Headers();
    /*myHeader.append('cz-admin-token',localStorage.getItem('token'));*/
    /*this.http.get('api/user/get', {headers: myHeader})
      .subscribe(
        v => console.log(v),
        err => console.log(err)
      );*/
  }


}
