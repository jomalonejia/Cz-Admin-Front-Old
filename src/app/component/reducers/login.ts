import * as login from '../actions/login';
import construct = Reflect.construct;
import {Router} from "@angular/router";

export interface LoginState{
  loggedIn:boolean;
  token:string;
  imgUrl:string;
  username:string;
}

const initialState = {
  loggedIn:false,
  token:null,
  imgUrl:'default.png',
  username:''
}


export function loginReducer(state:LoginState=initialState,action:login.loginActions):LoginState{
  switch (action.type){
    case login.LOGIN_SUCCESS:
      const result = action.payload;
      const token = result['token'];
      const imgUrl = result['imgUrl'];
      const username = result['username'];
      return Object.assign(
        {}, state,
        {
          loggedIn:true,
          token:token,
          imgUrl:imgUrl,
          username:username
        }
        );
    case login.LOGIN_FAILED:
      return Object.assign({},state,initialState);
    case login.LOGOUT_SUCCESS:
      localStorage.removeItem('login');
      return Object.assign({},state,initialState);
    case login.LOGOUT_FAILED:
      return Object.assign({},state,initialState);
    case login.UPLOAD_PROFILE_SUCCESS:
      console.log(action.payload);
      return Object.assign({},state,{imgUrl:action.payload});
    default: return state;
  }
}

export const getLoggedIn = (state:LoginState) => state.loggedIn;
export const getToken = (state:LoginState) => state.token;
export const getImgUrl = (state:LoginState) => state.imgUrl;
export const getUsername = (state:LoginState) => state.username;
