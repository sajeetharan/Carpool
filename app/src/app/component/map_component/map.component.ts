import { Component, OnInit, ViewChild } from '@angular/core';
import { DirectionsRenderer } from '@ngui/map'
@Component({
    selector: 'map',
    templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {
    @ViewChild(DirectionsRenderer) directionsRendererDirective: DirectionsRenderer;

    directionsRenderer: DirectionsRenderer;
    directionsResult: google.maps.DirectionsResult;
    direction: any = {
        origin: 'dehiwala junction dehiwala-mount lavinia',
        destination: 'Moratuwa',
        travelMode: 'WALKING'
    };
    ngOnInit() {
        this.directionsRendererDirective['initialized$'].subscribe((directionsRenderer: any) => {
            this.directionsRenderer = directionsRenderer;
        });
    }

    directionsChanged() {

    }

    showDirection() {
        this.directionsRendererDirective['showDirections'](this.direction);
    }
}
