import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchungDetailComponent } from './buchung-detail.component';

describe('BuchungDetailComponent', () => {
  let component: BuchungDetailComponent;
  let fixture: ComponentFixture<BuchungDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuchungDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchungDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
