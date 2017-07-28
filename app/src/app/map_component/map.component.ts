import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {
    direction: {
        'origin': 'penn station, new york, ny',
        'destination ': '260 Broadway New York NY 10007'
    };

    ngOnInit() {
        // directionsRendererDirective.initialized$.subscribe((e: any) => {
        //     this.directionsRenderer = e;
        // })
    }

    directionsChanged() {

    }

    showDirection() {

    }
}
