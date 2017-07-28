import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NguiMapModule} from '@ngui/map';
import { AppComponent } from './app.component';
import { MapComponent } from './map_component/map.component';


@NgModule({
  imports: [
    BrowserModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAZpDyM-c--W0qZ9Y510vM5aklIOx07Pjk'})
  ],
  declarations: [
    AppComponent,
    MapComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
