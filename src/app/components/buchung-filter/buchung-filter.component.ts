import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-buchung-filter',
  templateUrl: './buchung-filter.component.html',
  styleUrls: ['./buchung-filter.component.scss']
})
export class BuchungFilterComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
