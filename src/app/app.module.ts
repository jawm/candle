import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DatapointEntryComponent } from './datapoint-entry/datapoint-entry.component';
import { NewMetricComponent } from './new-metric/new-metric.component';


@NgModule({
  declarations: [
    AppComponent,
    DatapointEntryComponent,
    NewMetricComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
