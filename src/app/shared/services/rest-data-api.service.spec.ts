import { TestBed } from '@angular/core/testing';

import { RestDataApiService } from './rest-data-api.service';

describe('RestDataApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestDataApiService = TestBed.get(RestDataApiService);
    expect(service).toBeTruthy();
  });
});
