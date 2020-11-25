import { TestBed } from '@angular/core/testing';

import { RemoteDataServiceService } from './remote-data-service.service';

describe('RemoteDataServiceService', () => {
  let service: RemoteDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
