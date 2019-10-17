import { Component, OnInit, Input } from '@angular/core';
import { Buchung } from '../../models/buchung';
import { Segment } from '../../models/segment';
import { Flight } from '../../models/flight';
import { Passenger } from '../../models/passenger';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-buchung-airline-detail-expand',
  templateUrl: './buchung-airline-detail-expand.component.html',
  styleUrls: ['./buchung-airline-detail-expand.component.scss']
})
export class BuchungAirlineDetailExpandComponent implements OnInit {
  @Input() buchung: Buchung;
  @Input() data: Buchung[];
  @Input() flights: Flight[];
  @Input() segment: Segment[];

  dataSource = new MatTableDataSource<Buchung>();
  displayedColumnsHin: string[] = ['detail', 'start', 'ziel', 'fg', 'flug_hin_nr', 'abflug_datum', 'abflug_zeit', 'ankunft_datum', 'ankunft_zeit'];
  displayedColumnsReturn: string[] = ['detail', 'ziel', 'start', 'fg', 'flug_zurueck_nr', 'abflug_datum', 'abflug_zeit', 'ankunft_datum', 'ankunft_zeit', 'pnr']

  constructor() { }

  ngOnInit() {
    this.dataSource.data = this.data;
  }

}
