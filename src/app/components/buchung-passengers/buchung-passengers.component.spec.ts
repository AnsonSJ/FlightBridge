import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchungPassengersComponent } from './buchung-passengers.component';

describe('BuchungPassengersComponent', () => {
  let component: BuchungPassengersComponent;
  let fixture: ComponentFixture<BuchungPassengersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuchungPassengersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchungPassengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
