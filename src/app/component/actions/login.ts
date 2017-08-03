import {Action} from "@ngrx/store";
import {User} from '../model';
import {LoginUser} from "app/view/login/login.model";

export const LOGIN = '[Login] Login';
export const LOGIN_SUCCESS = '[Login] Login Success';
export const LOGIN_FAILED = '[Login] Login Failed';
export const REGISTER = '[Register] Login';
export const REGISTER_SUCCESS = '[Register] Register Success';
export const REGISTER_FAILED = '[Register] Register Failed';
export const LOGOUT = '[Logout] Logout';
export const LOGOUT_SUCCESS = '[Logout] Logout Success';
export const LOGOUT_FAILED = '[Logout] Logout Failed';
export const UPLOAD_PROFILE_SUCCESS = '[Upload] Profile Success';

export class LoginAction implements Action {
  readonly type: string = LOGIN;

  constructor(public payload: LoginUser) {
  }
}

export class LoginSuccessAction implements Action {
  readonly type: string = LOGIN_SUCCESS;

  constructor(public payload: { 'token': string }) {
  }
}

export class LoginFailedAction implements Action {
  readonly type: string = LOGIN_FAILED;

  constructor(public payload?) {
  }
}

export class RegisterAction implements Action {
  readonly type: string = REGISTER;
  constructor(public payload: User) {
  }
}

export class RegisterSuccessAction implements Action {
  readonly type: string = REGISTER_SUCCESS;

  constructor(public payload: { 'token': string }) {
  }
}

export class RegisterFailedAction implements Action {
  readonly type: string = REGISTER_FAILED;

  constructor(public payload?) {
  }
}

export class LogoutAction implements Action {
  readonly type: string = LOGOUT;

  constructor(public payload?) {
  }
}

export class LogoutSuccessAction implements Action {
  readonly type: string = LOGOUT_SUCCESS;

  constructor(public payload?) {
  }
}

export class UploadProfileSuccessAction implements Action {
  readonly type: string = UPLOAD_PROFILE_SUCCESS;

  constructor(public payload: string) {
  }
}

export type loginActions = LoginAction |
  LoginSuccessAction |
  LoginFailedAction|
  LogoutAction |
  LogoutSuccessAction |
  RegisterAction|
  RegisterSuccessAction|
  RegisterFailedAction|
  UploadProfileSuccessAction;
