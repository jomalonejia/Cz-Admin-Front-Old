import { NgModule}      from '@angular/core';


import {CzPageTop} from "./components";



import {CzProfilePipe} from "./pipe";

const THEME_COMPONENTS = [
  CzPageTop
];

const THEME_PIPES = [
  CzProfilePipe
]

@NgModule({
  declarations:[
    THEME_COMPONENTS,
    THEME_PIPES
  ],
  exports:[
    THEME_COMPONENTS,
    THEME_PIPES
  ]
})

export class ThemeModule{

}
