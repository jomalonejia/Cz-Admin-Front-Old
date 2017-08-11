import {NgModule, ModuleWithProviders}      from '@angular/core';
import {CommonModule} from "@angular/common";
import { MomentModule } from 'angular2-moment';

import {AppTranslationModule} from "app/app.translation.module";


import {CzPageTop} from "./components";
import {CzMsgCenter} from "./components";
import {CzSidebar} from "./components";
import {CzMenu} from "./components";
import {CzMenuItem} from "./components";
import {CzCard} from "./components";

import {CzSlimScroll} from "./directives";
import {CzScrollPosition} from "./directives";

import {CzMenuService} from "./service";
import {LoginService} from "./service";
import {RegisterService} from "./service";
import {AuthGuardActive} from "./service";
import {CanLoginActivate} from "./service";
import {MessageService} from "./service";


import {CzProfilePipe} from "./pipe";
import {RouterModule} from "@angular/router";






const THEME_COMPONENTS = [
  CzPageTop,
  CzMsgCenter,
  CzSidebar,
  CzMenu,
  CzMenuItem,
  CzCard

];

const NGA_DIRECTIVES = [
  CzScrollPosition,
  CzSlimScroll
];

const NGA_SERVICES = [
  CzMenuService,
  LoginService,
  RegisterService,
  AuthGuardActive,
  CanLoginActivate,
  MessageService
];

const THEME_PIPES = [
  CzProfilePipe
]

@NgModule({
  declarations:[
    THEME_COMPONENTS,
    THEME_PIPES,
  ],
  imports:[
    CommonModule,
    RouterModule,
    MomentModule,
    AppTranslationModule
  ],
  exports:[
    THEME_COMPONENTS,
    THEME_PIPES
  ]
})

export class ThemeModule{
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: ThemeModule,
      providers: [
        ...NGA_SERVICES
      ],
    };
  }
}
