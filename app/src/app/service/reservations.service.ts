import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UtilService } from './util.service';
import 'rxjs/add/operator/map';

@Injectable()
export class ReservationsService {


    constructor(private http: Http, private utilService: UtilService) {
    }


    getReservations() {

    }


    getReservationsInit() {

    }
}
