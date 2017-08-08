import * as message from '../actions/message'

export interface MessageState{
  activeUser:string;
}

const initialState:MessageState = {
  activeUser:''
}

export function messageReducer(state:MessageState=initialState,action:message.messageActions):MessageState{
  switch (action.type) {
    case message.TOGGLE_MESSAGE_USER:
      return Object.assign({}, state, {activeUser:action.payload});
    default:
      return state;
  }
}

export const getActiveUser  = (state:MessageState) => state.activeUser;
