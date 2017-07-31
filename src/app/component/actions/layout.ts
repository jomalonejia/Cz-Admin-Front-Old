import {Action} from "@ngrx/store";

export const TOGGLE_MENU = '[Layout] Toggle Menu';

export class ToggleMenuAction implements Action{
  readonly type: string = TOGGLE_MENU;
}

export type LayoutActions = ToggleMenuAction;


