import {Component} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, AbstractControl, Validators} from '@angular/forms';
import {Store} from "@ngrx/store";
import * as reducers from '../../component/reducers';
import * as actions from '../../component/actions'
import {RegisterModel} from "app/view/register/register.model";
import {RegisterValidationService} from "./RegisterValidationService";
import {AuthHttp} from "angular2-jwt";
import {Http} from "@angular/http";
import {GlobalState} from "app/component/global.state";

@Component({
  selector: 'login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  public form: FormGroup;
  public firstName: AbstractControl;
  public lastName: AbstractControl;
  public email: AbstractControl;
  public username: AbstractControl;
  public passwords:FormGroup;
  public password: AbstractControl;
  public repeatpassword: AbstractControl;

  public submitted: boolean = false;
  private isRegisterFailed:boolean = false;
  private errorMessage:string = '';


  constructor(private fb: FormBuilder,
              private store:Store<reducers.State>,
              private state:GlobalState
              ) {
    this.form = fb.group({
      'firstName': ['', Validators.compose([
                      Validators.required,
                      Validators.minLength(4),
                      Validators.maxLength(8),
                      Validators.pattern("[a-zA-Z]*")
                   ])],
      'lastName': ['', Validators.compose([
                     Validators.required,
                     Validators.minLength(4),
                     Validators.maxLength(8),
                     Validators.pattern("[a-zA-Z]*")
                   ])],
      'email': ['', Validators.compose([
                      Validators.required,
                      RegisterValidationService.emailValidator
                    ])],
      'username': ['', Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(8),
                    Validators.pattern("[a-zA-Z0-9]*")
                  ])],
      'passwords': fb.group({
        'password': ['', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
          Validators.pattern("[a-zA-Z0-9.]*")
        ])],
        'repeatpassword': ['', Validators.compose([
          Validators.required,
          ])]
      },{validator: RegisterValidationService.validateEqualPassword('password', 'repeatpassword')})

    });

    this.firstName = this.form.controls['firstName'];
    this.lastName = this.form.controls['lastName'];
    this.email = this.form.controls['email'];
    this.username = this.form.controls['username'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatpassword = this.passwords.controls['repeatpassword'];
  }

  public register(obj:RegisterModel): void {
    obj.password = this.password.value;
    delete  obj['passwords'];
    this.submitted = true;
    if (this.form.valid) {
      this.store.dispatch(new actions.RegisterAction(obj));
    }
    this.state.register_error_essage$.subscribe(errorMessage => {
      if(errorMessage){
        this.isRegisterFailed = true;
        this.errorMessage = errorMessage;
        setTimeout(() => {this.isRegisterFailed=false;},2000);
      }
    });
  }
}
