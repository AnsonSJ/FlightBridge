import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchungAirlineDetailComponent } from './buchung-airline-detail.component';

describe('BuchungAirlineDetailComponent', () => {
  let component: BuchungAirlineDetailComponent;
  let fixture: ComponentFixture<BuchungAirlineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuchungAirlineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchungAirlineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
