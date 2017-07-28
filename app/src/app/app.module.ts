import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2MapModule } from 'ng2-map';
import { AppComponent } from './app.component';
import { MapComponent } from './map_component/map.component';


@NgModule({
  imports: [
    BrowserModule,
    Ng2MapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=MY_GOOGLE_API_KEY' })
  ],
  declarations: [
    AppComponent,
    MapComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
