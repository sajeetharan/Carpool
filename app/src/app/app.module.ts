import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './map_component/map.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    MapComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
