import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchungFilterComponent } from './buchung-filter.component';

describe('BuchungFilterComponent', () => {
  let component: BuchungFilterComponent;
  let fixture: ComponentFixture<BuchungFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuchungFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchungFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
