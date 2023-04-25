import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import  {FirstPageComponent} from "./components/first-page/first-page.component";
import {SignUpPageComponent} from "./components/SignUp-page/SingUp-page.component";
import { NgxAudioPlayerModule } from 'ngx-audio-player';

@NgModule({

  declarations: [

    AppComponent,
    FirstPageComponent,
    SignUpPageComponent,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgxAudioPlayerModule,
    ReactiveFormsModule,
  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

  exports: [
    MatListModule,
  ],

 // providers: [User],
  bootstrap: [AppComponent]

})

export class AppModule { }
