import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { DatapointEntryComponent } from './datapoint-entry/datapoint-entry.component';
import { NewMetricComponent } from './new-metric/new-metric.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes';
import { CallbackComponent } from './callback/callback.component';
import { TopbarComponent } from './topbar/topbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DatapointEntryComponent,
    NewMetricComponent,
    CallbackComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
