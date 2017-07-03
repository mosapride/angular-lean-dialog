import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfirmComponent } from './dialog/confirm/confirm.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmComponent
  ],
  entryComponents: [
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
