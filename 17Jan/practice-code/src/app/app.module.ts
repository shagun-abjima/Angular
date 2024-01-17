import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Vpexample } from './vpexample';
import { ComponentForUsingvpComponent } from './component-for-usingvp/component-for-usingvp.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentForUsingvpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Vpexample],
  bootstrap: [AppComponent]
})
export class AppModule { }
