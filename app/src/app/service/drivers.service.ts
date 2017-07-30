import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { UtilService } from './util.service';
import 'rxjs/add/operator/map';

@Injectable()
export class DriversService {


    constructor(private http: Http, private utilService: UtilService) {
    }


    getDriversInit() {

    }

    getDrivers() {

    }

    addDriver(name: String) {

    }
}
