import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Buchung } from '../../models/buchung';
import { Status } from '../../models/status';
import { BuchungDataService } from '../../services/buchung-data.service';
//import { BUCHUNGDATA } from '../../mock-buchungen';

import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-buchung-datatable',
  templateUrl: './buchung-datatable.component.html',
  styleUrls: ['./buchung-datatable.component.scss'],
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

export class BuchungDatatableComponent implements OnInit {
  showDataTable: boolean = true;
  panelOpenState = false;
  flightsgeber: string;
  statusCheck: string[]= ['Oneway nicht gebucht', 'in Klärung', 'Fertig', 'OK'];

  displayedColumns: string[] = ['referenz', 'super_PNR', 'pax', 'fg', 'hin', 'zurueck', 'start', 'ziel', 'euro', 'typ', 'source', 'eingang', 'version', 'detail' ];
  dataSource = new MatTableDataSource<Buchung>();

  statusItems: Status[] = [
   { name: 'OK' },
   { name: 'Oneway nicht gebucht' }, 
   { name: 'in Klärung' }, 
   { name: 'Fertig' }
  ];

  filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
    invoiceNr: new FormControl(),
    statusCheck: new FormControl(),
    textSearch: new FormControl(),
  });

  get fromDate() { return this.filterForm.get('fromDate').value; }
  get toDate() { return this.filterForm.get('toDate').value; }
  get invoiceNr() { return this.filterForm.get('invoiceNr').value; }
  get textSearch() { return this.filterForm.get('textSearch').value; }

  constructor(
    private _adapter: DateAdapter<any>,
    private buchungDataService: BuchungDataService,
    public datepipe: DatePipe
  ) {}
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  /* get Dom Element (ID) */ 
  // @ViewChild('invoiceSearch', {static: true}) invoiceSearch: any;
  @ViewChild('errorCheck', {static: true}) errorCheck: any;
  
  ngOnInit() { 
    this._adapter.setLocale('de');
    this.dataSource.filterPredicate = (data, filter) =>{
      if (this.textSearch || this.fromDate || this.toDate || this.errorCheck.checked) {
        let newFromDate = this.datepipe.transform(this.fromDate, 'MM.dd.yyyy');
        let newToDate = this.datepipe.transform(this.toDate, 'MM.dd.yyyy'); 
        let newTextSearch = this.textSearch.trim().toLowerCase();
        let isNewFromDate = newFromDate == data.flights[0].depDate;
        let isNewToDate = newToDate == data.flights[0].arrAirport;
        //let isStatusCheck = this.statusCheck.includes(data.status);
        let isText = data.invoice.includes(newTextSearch) || newTextSearch == data.pnr;

        if (this.textSearch && !this.fromDate && !this.toDate && !this.statusCheck) {
          return isText;
        }
        if (this.fromDate && !this.textSearch && !this.toDate && !this.statusCheck) {
          return isNewFromDate;
        }
        if (this.toDate  && !this.textSearch && !this.fromDate && !this.statusCheck) {
          return isNewToDate;
        }
        // if (this.statusCheck && !this.textSearch && !this.fromDate && !this.toDate) {
        //   return isStatusCheck;
        // }
        if (this.textSearch && this.fromDate && !this.toDate && !this.statusCheck) {
          return isText && isNewFromDate;
        }
        if (this.textSearch && this.toDate && !this.fromDate && !this.statusCheck) {
          return isText && isNewToDate;
        }
        // if (this.textSearch && !this.toDate && !this.fromDate && this.statusCheck) {
        //   return isText && isStatusCheck;
        // }
        if (this.fromDate && this.toDate && !this.textSearch && !this.statusCheck) {
          return isNewFromDate && isNewToDate;
        }
        // if (this.fromDate && !this.toDate && !this.textSearch && this.statusCheck) {
        //   return isNewFromDate && isStatusCheck;
        // }
        // if (this.toDate && !this.fromDate && !this.textSearch && this.statusCheck) {
        //   return isNewToDate && isStatusCheck;
        // }
        if (this.textSearch && this.fromDate && this.toDate && !this.statusCheck) {
          return isText && isNewFromDate && isNewToDate;
        }
        // if (this.textSearch && !this.fromDate && this.toDate && this.statusCheck) {
        //   return isText && isNewToDate && isStatusCheck;
        // }
        // if (this.textSearch && this.fromDate && !this.toDate && this.statusCheck) {
        //   return isText && isNewFromDate && isStatusCheck;
        // }
        // if (!this.textSearch && this.fromDate && this.toDate && this.statusCheck) {
        //   return isNewFromDate && isNewToDate && isStatusCheck;
        // }
        // if (this.textSearch && this.fromDate && this.toDate && this.statusCheck) {
        //   return isText && isNewFromDate && isNewToDate && isStatusCheck;
        // } 
      } else if (this.invoiceNr) {
        let newInvoiceNr = this.invoiceNr.trim().toUpperCase();
        return data.invoice.includes(newInvoiceNr);
      }
      return true;
    }
  }

  applyFilter() {
    this.getBuchungData();
    this.dataSource.filter = '' + Math.random();
  }

  clearAll() {
    this.dataSource.data = [];
    this.resetCheckbox();
  }

  /* getData from Service */
  getBuchungData() {
    this.buchungDataService.getData().subscribe((data: Buchung[]) => {
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  // focusReferenz() {
  //   if(!this.panelOpenState) {
  //     this.invoiceSearch.nativeElement.focus();
  //   }
  // }

  resetCheckbox() {
    if(this.errorCheck.checked) {
      this.errorCheck.checked = false;
      if(this.statusCheck.length == 3 ) {
        this.statusCheck.push('OK');
      }
    }
  }

  onChange($event) {
    if($event.checked) {
      if(this.statusCheck.length > 3) {
        this.statusCheck.pop();
      }
    }else {
      this.statusCheck.push('OK');
    }
  }
}
