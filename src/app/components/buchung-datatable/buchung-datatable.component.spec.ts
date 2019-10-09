import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchungDatatableComponent } from './buchung-datatable.component';

describe('BuchungDatatableComponent', () => {
  let component: BuchungDatatableComponent;
  let fixture: ComponentFixture<BuchungDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuchungDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchungDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
