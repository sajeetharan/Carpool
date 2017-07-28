import { Component } from '@angular/core';

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
})
export class MapComponent {
    center = 'Colombo';
    wayPoints = [
        { location: { lat: 44.32384807250689, lng: -78.079833984375 }, stopover: true },
        { location: { lat: 44.55916341529184, lng: -76.17919921875 }, stopover: true },
    ];
}
