import {ActionReducer, combineReducers} from "@ngrx/store";
import {createSelector} from 'reselect';
import {compose} from "@ngrx/core";
import {environment} from "environments/environment";
import {storeFreeze} from 'ngrx-store-freeze';
import * as fromLayout from '../reducers/layout';
import * as fromLogin from '../reducers/login';
import * as fromMessage from '../reducers/message';
import {localStorageSync} from "ngrx-store-localstorage";


export interface State {
  layout: fromLayout.LayoutState;
  login: fromLogin.LoginState;
  message:fromMessage.MessageState;
}

const reducers = {
  layout: fromLayout.layoutReducer,
  login: fromLogin.loginReducer,
  message:fromMessage.messageReducer
}

const developmentReducer: ActionReducer<State> = compose(localStorageSync({keys: Object.keys(reducers),rehydrate:true}), combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getLayoutState = (state: State) => state.layout;
export const getIsCollapsed = createSelector(getLayoutState,fromLayout.getIsCollapsed);

export const getLoginState = (state:State) => state.login;
export const getLoggedIn = createSelector(getLoginState,fromLogin.getLoggedIn);
export const getToken = createSelector(getLoginState,fromLogin.getToken);
export const getImgUrl = createSelector(getLoginState,fromLogin.getImgUrl);
export const getUsername = createSelector(getLoginState,fromLogin.getUsername);
export const getUserId = createSelector(getLoginState,fromLogin.getUserId);

export const getMessageState = (state:State) => state.message;
export const getActiveUser = createSelector(getMessageState,fromMessage.getActiveUser);
