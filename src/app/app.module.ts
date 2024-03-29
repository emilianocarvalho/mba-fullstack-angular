import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MedicoModule} from './medico/medico.module';
import {MedicoRoutingModule} from './medico/medico-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MedicoRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MedicoModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
