import { TestBed } from '@angular/core/testing';

import { UtilitariosFieldServiceService } from './utilitarios-field-service.service';

describe('UtilitariosFieldServiceService', () => {
  let service: UtilitariosFieldServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilitariosFieldServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
