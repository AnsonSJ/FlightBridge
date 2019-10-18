import { Component, OnInit, Input } from '@angular/core';

import { Buchung } from '../../models/buchung';
import { Flight } from '../../models/flight';
import { Passenger } from '../../models/passenger';

@Component({
  selector: 'app-buchung-passengers',
  templateUrl: './buchung-passengers.component.html',
  styleUrls: ['./buchung-passengers.component.scss']
})
export class BuchungPassengersComponent implements OnInit {
  @Input() buchung: Buchung;
  @Input() data: Buchung[];
  @Input() flights: Flight[];
  @Input() passengers: Passenger[];
  @Input() passengerPrices: string[];
  @Input() statusCheck: string[];

  displayedColumnPas: string[] = ['anrede', 'name', 'vorname', 'alter', 'euro'];

  constructor() { }

  ngOnInit() {
  }

}
