import * as message from '../actions/message'
import {Message} from "../model/message";

export interface MessageState{
  activeUser:string;
  messages:Message[];
}

const initialState:MessageState = {
  activeUser:'',
  messages:[]
}

export function messageReducer(state:MessageState=initialState,action:message.messageActions):MessageState{
  switch (action.type) {
    case message.TOGGLE_MESSAGE_USER_SUCCESS:
      console.log(action.payload);
      return state;
    case message.TOGGLE_MESSAGE_USER_FAILED:
      console.log(action.payload);
      return state;
    case message.READ_MESSAGE_SUCCESS:
      return Object.assign({}, state, {
        activeUser:action.payload['activeUser'],
        messages:action.payload['messages']
      });
    default:
      return state;
  }
}

export const getActiveUser  = (state:MessageState) => state.activeUser;
export const getMessages = (state: MessageState) => state.messages;
