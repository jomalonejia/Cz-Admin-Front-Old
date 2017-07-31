import {Component, ElementRef} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, AbstractControl, Validators} from '@angular/forms';
import {LoginUser} from "./login.model";
import {Router} from '@angular/router';
import {Store} from "@ngrx/store";
import * as reducers from '../../component/reducers';
import * as loginAction from '../../component/actions/login';
import {Observable} from "rxjs/Observable";
import {GlobalState} from "app/component/global.state";

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

  constructor(private fb: FormBuilder,
              private store:Store<reducers.State>
              ) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];

  }

  public login(user: LoginUser): void {
    this.submitted = true;
    if (this.form.valid) {
      this.store.dispatch(new loginAction.LoginAction(user));
    }
  }
}
