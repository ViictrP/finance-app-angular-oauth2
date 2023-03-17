import {NgModule} from '@angular/core';

import {AppComponent} from './components/app.component';
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from "./app.routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
