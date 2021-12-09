import { TestBed } from '@angular/core/testing';

import { VeiculosFieldServiceService } from './veiculos-field-service.service';

describe('VeiculosFieldServiceService', () => {
  let service: VeiculosFieldServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeiculosFieldServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
