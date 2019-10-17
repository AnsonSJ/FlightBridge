import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchungAirlineDetailExpandComponent } from './buchung-airline-detail-expand.component';

describe('BuchungAirlineDetailExpandComponent', () => {
  let component: BuchungAirlineDetailExpandComponent;
  let fixture: ComponentFixture<BuchungAirlineDetailExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuchungAirlineDetailExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchungAirlineDetailExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
