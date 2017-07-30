import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Reservation } from '../../model/reservation.component';
import { ReservationsService } from '../../service/reservations.service';


@Component({
    selector: 'reservations',
    moduleId: module.id,
    templateUrl: '../html/reservations.component.html',
    styleUrls: ['../css/reservations.component.css']
})


export class ReservationsComponent implements OnInit {
    selectedReservation: Reservation;
    reservations: Reservation[];

    // Dependency injection
    constructor(
        private reservationsService: ReservationsService) { }

    ngOnInit(): void {
    }


}