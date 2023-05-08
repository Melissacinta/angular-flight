import { TestBed } from '@angular/core/testing';

import { OpenskyApiService } from './opensky-api.service';

describe('OpenskyApiService', () => {
  let service: OpenskyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenskyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
