import * as login from '../actions/login';

export interface LoginState{
  loggedIn:boolean;
  token:string;
}

const initialState = {
  loggedIn:false,
  token:null
}

export function loginReducer(state:LoginState=initialState,action:login.loginActions):LoginState{
  switch (action.type){
    case login.LOGIN_SUCCESS:
      const result = action.payload;
      const token = result['token'];
      return Object.assign({},state,{loggedIn:true,token:token});
    case login.LOGOUT:
      localStorage.removeItem('login');
      return Object.assign({},state,{loggedIn:false,token:''});
    default: return state;
  }
}

export const getLoggedIn = (state:LoginState) => state.loggedIn;

export const getToken = (state:LoginState) => state.token;
