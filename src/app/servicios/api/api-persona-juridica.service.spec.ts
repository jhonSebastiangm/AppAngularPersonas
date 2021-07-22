import { TestBed } from '@angular/core/testing';

import { ApiPersonaJuridicaService } from './api-persona-juridica.service';

describe('ApiPersonaJuridicaService', () => {
  let service: ApiPersonaJuridicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPersonaJuridicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
