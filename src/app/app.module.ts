import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule, RequestOptions} from "@angular/http";

import { AppComponent } from './app.component';
import {routing} from "./app.routing";

import {ViewModule} from "./view/view.module";
import {GlobalState} from "app/theme/global.state";
import {ThemeModule} from "app/theme/themeModule";
import {StoreModule} from "@ngrx/store";
import {RouterStoreModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

import {reducer} from './theme/reducers'
import {AuthConfig, AuthHttp, JwtHelper} from "angular2-jwt";
import {EffectsModule} from "@ngrx/effects";
import {LoginEffects} from './theme/effects';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    noJwtError: true,
    tokenGetter: (() => localStorage.getItem('token')),
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ViewModule,
    ThemeModule.forRoot(),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(LoginEffects),
    routing
  ],
  providers: [
    GlobalState,
    JwtHelper,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
