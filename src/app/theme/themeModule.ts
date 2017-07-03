import { NgModule}      from '@angular/core';
import {CommonModule} from "@angular/common";


import {CzPageTop} from "./components";



import {CzProfilePipe} from "./pipe";
import {CzMsgCenter} from "./components";


const THEME_COMPONENTS = [
  CzPageTop,
  CzMsgCenter
];

const THEME_PIPES = [
  CzProfilePipe
]

@NgModule({
  declarations:[
    THEME_COMPONENTS,
    THEME_PIPES
  ],
  imports:[
    CommonModule
  ],
  exports:[
    THEME_COMPONENTS,
    THEME_PIPES
  ]
})

export class ThemeModule{

}
