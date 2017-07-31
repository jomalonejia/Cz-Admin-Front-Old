import * as layout from "app/component/actions/layout";

export interface LayoutState{
  isCollapsed:boolean;
}

const initialState:LayoutState = {
  isCollapsed:false
}

export function layoutReducer(state:LayoutState=initialState,action:layout.LayoutActions):LayoutState{
  switch (action.type){
    case layout.TOGGLE_MENU:
      return Object.assign({},state,{isCollapsed:!state.isCollapsed});
    default:
      return state;
  }
}

export const getIsCollapsed  = (state:LayoutState) => state.isCollapsed;
