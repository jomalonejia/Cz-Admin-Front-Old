import * as login from '../actions/login';
import construct = Reflect.construct;
import {Router} from "@angular/router";

export interface LoginState{
  loggedIn:boolean;
  token:string;
  imgUrl:string;
  username:string;
  userId:number;
}

const initialState = {
  loggedIn:false,
  token:null,
  imgUrl:'default.png',
  username:'',
  userId:0
}


export function loginReducer(state:LoginState=initialState,action:login.loginActions):LoginState{
  switch (action.type){
    case login.LOGIN_SUCCESS:
      const login_result = action.payload;
      const login_token = login_result['token'];
      const login_imgUrl = login_result['imgUrl'];
      const login_username = login_result['username'];
      const login_userId = login_result['userId'];
      return Object.assign(
        {}, state,
        {
          loggedIn:true,
          loginFailed:false,
          token:login_token,
          imgUrl:login_imgUrl,
          username:login_username,
          userId:login_userId
        }
        );
    case login.LOGIN_FAILED:
      return Object.assign({},state,initialState);
    case login.LOGOUT_SUCCESS:
      localStorage.removeItem('login');
      return Object.assign({},state,initialState);
    case login.LOGOUT_FAILED:
      return Object.assign({},state,initialState);
    case login.REGISTER_SUCCESS:
      return Object.assign({},state,initialState);
      /*const register_result = action.payload;
      const register_token = register_result['token'];
      const register_imgUrl = register_result['imgUrl'];
      const register_username = register_result['username'];
      return Object.assign(
        {}, state,
        {
          loggedIn:true,
          loginFailed:false,
          token:register_token,
          imgUrl:register_imgUrl,
          username:register_username
        }
      );*/
    case login.REGISTER_FAILED:
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
export const getUserId = (state:LoginState) => state.userId;

