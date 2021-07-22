import { TestBed } from '@angular/core/testing';

import { ApiPersonaNaturalService } from './api-persona-natural.service';

describe('ApiPersonaNaturalService', () => {
  let service: ApiPersonaNaturalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPersonaNaturalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
