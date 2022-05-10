import { TestBed } from '@angular/core/testing';

import { EndowService } from './endow.service';

describe('EndowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EndowService = TestBed.get(EndowService);
    expect(service).toBeTruthy();
  });
});
