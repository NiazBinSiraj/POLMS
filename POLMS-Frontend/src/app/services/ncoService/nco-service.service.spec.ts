import { TestBed } from '@angular/core/testing';

import { NcoServiceService } from './nco-service.service';

describe('NcoServiceService', () => {
  let service: NcoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NcoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
