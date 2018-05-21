import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StationsComponent } from './stations/stations.component';
import { AppRoutingModule } from './/app-routing.module';
import { GestionstationsComponent } from './gestionstations/gestionstations.component';

@NgModule({
  declarations: [
    AppComponent,
    StationsComponent,
    GestionstationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
