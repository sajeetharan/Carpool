import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Car } from '../../model/car.component';
import { CarsService } from '../../service/cars.service';

@Component({
    selector: 'cars',
    moduleId: module.id,
    templateUrl: '../html/cars.component.html',
    styleUrls: ['../css/cars.component.css']
})
export class CarsComponent implements OnInit {
    cars: Car[];

    constructor(
        private carsService: CarsService) { }

    ngOnInit(): void {

    }
}
