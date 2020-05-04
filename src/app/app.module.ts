import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input'

import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AddressComponent } from './address/address.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { AppRoutingModule } from './app-routing.module';
import { GetStartedComponent } from './get-started/get-started.component';
import { PgFieldModule, PgFormModule, PgIconModule, PgButtonModule } from '@progleasing/grit-core';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    AppRoutingModule,
    PgFieldModule,
    PgFormModule,
    PgIconModule,
    PgButtonModule
    ],
  declarations: [ 
    AppComponent, 
    AddressComponent,
     BasicInfoComponent, 
     GetStartedComponent, 
     PageTitleComponent,
     PageTitleComponent
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
