import {Action} from "@ngrx/store";
import {User} from "../model";
export const LOGIN = '[Login] Login';
export const LOGIN_SUCCESS= '[Login] Login Success';
export const LOGOUT = '[Logout] Logout';
export const LOGOUT_SUCCESS = '[Logout] Logout Success';

export class LoginAction implements Action{
  readonly  type: string = LOGIN;
  constructor(public payload:User){}
}

export class LoginSuccessAction implements Action{
  readonly type:string = LOGIN_SUCCESS;
  constructor(public payload:{'token':string}){}
}

export class LogoutAction implements Action{
  readonly type:string = LOGOUT;
  constructor(public payload?){}
}

export class LogoutSuccessAction implements Action{
  readonly type:string = LOGOUT_SUCCESS;
  constructor(public payload?){}
}

export type loginActions = LoginAction|LoginSuccessAction|LogoutAction|LogoutSuccessAction;
