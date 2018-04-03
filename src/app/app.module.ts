import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DatapointEntryComponent } from './datapoint-entry/datapoint-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    DatapointEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
