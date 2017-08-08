
import {Action} from "@ngrx/store";
export const TOGGLE_MESSAGE_USER = '[Message] Toggle Message User';

export class ToggleMessageUserAction implements Action {
  readonly type: string = TOGGLE_MESSAGE_USER;

  constructor(public payload: string) {
  }
}

export type messageActions = ToggleMessageUserAction;
