import {Action} from "@ngrx/store";

export const TOGGLE_MESSAGE_USER = '[Message] Toggle Message User';
export const TOGGLE_MESSAGE_USER_SUCCESS = '[Message] Toggle Message User Success';
export const TOGGLE_MESSAGE_USER_FAILED = '[Message] Toggle Message User Failed';
export const READ_MESSAGE = '[Message] Read Message';
export const READ_MESSAGE_SUCCESS = '[Message] Read Message Success';

export class ToggleMessageUserAction implements Action {
  readonly type: string = TOGGLE_MESSAGE_USER;

  constructor(public payload: object) {
  }
}

export class ToggleMessageUserSuccessAction implements Action {
  readonly type: string = TOGGLE_MESSAGE_USER_SUCCESS;

  constructor(public payload: object) {
  }
}

export class ToggleMessageUserFailedAction implements Action {
  readonly type: string = TOGGLE_MESSAGE_USER_FAILED;

  constructor(public payload?: object) {
  }
}

export class ReadMessage implements Action{
  readonly type: string = READ_MESSAGE;
  constructor(public payload:object){

  }
}
export class ReadMessageSuccess implements Action{
  readonly type: string = READ_MESSAGE_SUCCESS;
  constructor(public payload:object){

  }
}

export type messageActions = ToggleMessageUserAction|
                             ToggleMessageUserSuccessAction|
                             ToggleMessageUserFailedAction|
                             ReadMessage|
                             ReadMessageSuccess;
