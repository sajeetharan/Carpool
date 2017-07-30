import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Driver } from '../../model/driver.component';
import { DriversService } from '../../service/drivers.service';

@Component({
    // selector for tag in index.html
    selector: 'drivers',
    // to use relative urls
    moduleId: module.id,
    templateUrl: '../html/drivers.component.html',
    styleUrls: ['../css/drivers.component.css']
})
export class DriversComponent implements OnInit {
    drivers: Driver[];
    constructor(
        private driversService: DriversService) { }

    ngOnInit(): void {
        this.refreshDriverList();
    }

    refreshDriverList() {

    }

}
