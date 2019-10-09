import { TestBed } from '@angular/core/testing';

import { BuchungDataService } from './buchung-data.service';

describe('BuchungDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuchungDataService = TestBed.get(BuchungDataService);
    expect(service).toBeTruthy();
  });
});
