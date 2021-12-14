import { TestBed } from '@angular/core/testing';

import { ConfiguracoesFieldsService } from './configuracoes-fields.service';

describe('ConfiguracoesFieldsService', () => {
  let service: ConfiguracoesFieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguracoesFieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
