import {NgModule, ModuleWithProviders}      from '@angular/core';
import {CommonModule} from "@angular/common";
import { MomentModule } from 'angular2-moment';
import {RouterModule} from "@angular/router";

import {FileUploadModule} from "ng2-file-upload";

import {AppTranslationModule} from "app/app.translation.module";


import {
  CzPageTop,
  CzMsgCenter,
  CzSidebar,
  CzMenu,
  CzMenuItem,
  CzCard,
  CzImage
}
  from "./components";

import {
  CzSlimScroll,CzScrollPosition
}
  from "./directives";

import {
  CzMenuService,
  LoginService,
  RegisterService,
  AuthGuardActive,
  CanLoginActivate,
  MessageService
}
  from "./service";


import {
  CzProfilePipe,
  CzImageFrontPipe
}
from "./pipe";
import {CzImageBackendPipe} from "app/component/pipe/czImage/czImageBackendPipe";


const THEME_COMPONENTS = [
  CzPageTop,
  CzMsgCenter,
  CzSidebar,
  CzMenu,
  CzMenuItem,
  CzCard,
  CzImage

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
  CzProfilePipe,
  CzImageFrontPipe,
  CzImageBackendPipe
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
    AppTranslationModule,
    FileUploadModule
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
