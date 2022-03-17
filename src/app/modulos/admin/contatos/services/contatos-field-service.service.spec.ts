import { TestBed } from '@angular/core/testing';

import { ContatosFieldServiceService } from './contatos-field-service.service';

describe('ContatosFieldServiceService', () => {
  let service: ContatosFieldServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatosFieldServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
