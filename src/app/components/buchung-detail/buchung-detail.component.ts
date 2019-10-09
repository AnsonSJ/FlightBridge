import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { Buchung } from '../../models/buchung';
import { Flight } from '../../models/flight';
import { Segment } from '../../models/segment';
import { Passenger } from '../../models/passenger';
import { BuchungDataService } from '../../services/buchung-data.service';

@Component({
  selector: 'app-buchung-detail',
  templateUrl: './buchung-detail.component.html',
  styleUrls: ['./buchung-detail.component.scss']
})

export class BuchungDetailComponent implements OnInit {
  dataInfo: Buchung[] = [];
  buchung: Buchung;
  flight: Flight[];
  segment: Segment[];
  segmentHinOW: Segment[];
  segmentReturnOW: Segment[];
  segmentHinRT: Segment[] =[];
  segmentReturnRT: Segment[]=[];
  segmentsHin: Segment[];
  segmentsReturn: Segment[];
  passenger: Passenger[];
  displayedColumns: string[] = ['typ', 'super_PNR', 'fg', 'pnr', 'hin', 'zurueck', 'flug_hin_nr', 'flug_zurueck_nr', 'start', 'ziel', 'detail'];
  dataSource = new MatTableDataSource<Buchung>();
  flightDataSource = new MatTableDataSource<Flight>();
  segmentDataSource = new MatTableDataSource<Segment>();
  selectedUmbuchung: Buchung;
  version: string;
  hinDatum: Date;
  returnDatum: Date;
  statusInfo: string;
  isRT: any;
  segsHin: string;
  segsReturn: string;
  segs: string[]=[];
  pnrHin: string[]=[];
  pnrReturn: string[]=[];
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private buchungDataService: BuchungDataService
  ) {}

  ngOnInit() {
    this.getDataDetail();
  }

  /* get Daten from API */
  getDataDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.buchungDataService
      .getDataDetail(id)
      .subscribe(response => {
        this.buchung = response;
        this.flight = this.buchung.flights;
        this.flightDataSource.data = this.flight;
        this.passenger = this.buchung.passengers;

        this.isRT = this.buchung.flights.map(i =>i.roundTrip);
        if (this.isRT.includes(true)) {
          this.segment = response.flights.map(i =>i.segments)[0];
          this.segmentHinRT.push(this.segment[0]);
          this.changeDateToPickerDate(this.segmentHinRT);
          this.segmentReturnRT.push(this.segment[1]);
          this.changeDateToPickerDate(this.segmentReturnRT);
          this.segmentsHin = this.segmentHinRT;
          this.segmentsReturn = this.segmentReturnRT;
          this.pnrHin = this.pnrReturn = this.flight.map(c => c.carrierPnr);
        }else {
          this.segmentHinOW = response.flights.map(i =>i.segments)[0];
          this.changeDateToPickerDate(this.segmentHinOW);
          this.segmentReturnOW = response.flights.map(i =>i.segments)[1];
          this.changeDateToPickerDate(this.segmentReturnOW);
          this.segsHin = this.segmentHinOW.map(i => i.operatingCarrier + i.flightNumber).join(' / ');
          this.segsReturn = this.segmentReturnOW.map(i => i.operatingCarrier + i.flightNumber).join(' / ');
          this.segs.push(this.segsHin, this.segsReturn);
          this.segmentsHin = this.segmentHinOW;
          this.segmentsReturn = this.segmentReturnOW;
          this.pnrHin.push(this.flight[0].carrierPnr);
          this.pnrReturn.push(this.flight[1].carrierPnr);
        }
        this.dataInfo.push(response); 
        this.dataSource.data = this.dataInfo;
        this.version = this.buchung.modificationTimestamp;
    });
  };
  
  changeDateToPickerDate(segmentDate: any) {
    segmentDate.forEach((item: any, index: any) => {
      segmentDate[index].depDate = this.changeDateForm(segmentDate[index].depDate);
      segmentDate[index].arrDate = this.changeDateForm(segmentDate[index].arrDate);
    });
  }

  changeDateForm(parentDate: Date) {
    let date = parentDate.toString();
    let cur = date.split('.');
    let year = parseInt(cur[2]);
    let month = parseInt(cur[1]) - 1;
    let day = parseInt(cur[0]);
    return  new Date(year, month, day);
  } 

  // onSelect(buchung: Buchung): void {
  //   this.selectedUmbuchung = buchung;
  // }
}
