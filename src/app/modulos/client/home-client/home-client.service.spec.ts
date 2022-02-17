import { TestBed } from '@angular/core/testing';

import { HomeClientService } from './home-client.service';

describe('HomeClientService', () => {
  let service: HomeClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
