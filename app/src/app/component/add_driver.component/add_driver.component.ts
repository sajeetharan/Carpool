import { Component, EventEmitter, Output } from '@angular/core';
import { Driver } from '../../model/driver.component';
import { DriversService } from '../../service/drivers.service';

@Component({
    selector: 'adddriver',
    moduleId: module.id,
    templateUrl: './add_driver.component.html'
})

export class AddDriverComponent {
    driverInput: Driver;
    @Output() refreshDriverList = new EventEmitter<boolean>();

    constructor(
        private driversService: DriversService) { }

    addDriver(value: String) {

    }
}
