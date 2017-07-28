"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MapComponent = (function () {
    function MapComponent() {
        this.center = 'Colombo';
        this.wayPoints = [
            { location: { lat: 44.32384807250689, lng: -78.079833984375 }, stopover: true },
            { location: { lat: 44.55916341529184, lng: -76.17919921875 }, stopover: true },
        ];
    }
    return MapComponent;
}());
MapComponent = __decorate([
    core_1.Component({
        selector: 'map',
        templateUrl: './map.component.html',
    })
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map