import { TestBed } from '@angular/core/testing';

import { PropserviceService } from './propservice.service';

describe('PropserviceService', () => {
  let service: PropserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
