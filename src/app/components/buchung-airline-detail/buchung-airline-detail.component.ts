import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Buchung } from '../../models/buchung';
import { Segment } from '../../models/segment';
import { Flight } from '../../models/flight';
import { Passenger } from '../../models/passenger';
import { MatTableDataSource } from '@angular/material/table';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';


import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import { DatePipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-buchung-airline-detail',
  templateUrl: './buchung-airline-detail.component.html',
  styleUrls: ['./buchung-airline-detail.component.scss'],
  providers: [
    DatePipe,
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class BuchungAirlineDetailComponent implements OnInit {
  @Input() buchung: Buchung;
  @Input() data: Buchung[];
  @Input() hinDatumSel: string;
  @Input() statusSel: string;
  @Input() returnDatumSel: string;
  @Input() flights: Flight[];
  @Input() segmentsHin: Segment[];
  @Input() segmentsReturn: Segment[];
  @Input() pnrsHin: string[];
  @Input() pnrsReturn: string[];
  @Input() passengers: Passenger[];

  @ViewChild('depDateInput', {static: true}) depDateInput: any;

  displayedColumnsHin: string[] = ['detail', 'start', 'ziel', 'fg', 'flug_hin_nr', 'abflug_datum', 'abflug_zeit', 'ankunft_datum', 'ankunft_zeit', 'pnr'];
  displayedColumnsReturn: string[] = ['detail', 'ziel', 'start', 'fg', 'flug_zurueck_nr', 'abflug_datum', 'abflug_zeit', 'ankunft_datum', 'ankunft_zeit', 'pnr']
  displayedColumnPas: string[] = ['anrede', 'name', 'vorname', 'alter', 'euro'];
  dataSource = new MatTableDataSource<Buchung>();

  constructor(
    public datepipe: DatePipe,
    private _adapter: DateAdapter<any>,
  ) { }

  ngOnInit() {
    this._adapter.setLocale('de');
    this.dataSource.data = this.data;
  }


  // addRow() {
  //   this.data.push({
  //     abflug_zeit: " ",
  //     alter: null,
  //     ankunft_zeit: " ",
  //     anrede: " ",
  //     ca: " ",
  //     db_aktiv: null,
  //     detail: " ",
  //     editor: " ",
  //     eingang: " ",
  //     euro: " ",
  //     fg: " ",
  //     flug_hin_nr: " ",
  //     flug_zurueck_nr: " ",
  //     hin: " ",
  //     id: null,
  //     name: " ",
  //     pax: null,
  //     pnr: " ",
  //     referenz: " ",
  //     source: " ",
  //     start: " ",
  //     status: " ",
  //     super_PNR: null,
  //     timestamp: " ",
  //     typ: " ",
  //     version_nr: " ",
  //     vorname: " ",
  //     ziel: " ",
  //     zurueck: " ",
  //   });
  //   this.dataSource.data = this.data;
  // }

  removeRow() {
    this.data.pop();
    this.dataSource.data = this.data;
  }

}
