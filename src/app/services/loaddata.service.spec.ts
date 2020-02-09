import { TestBed } from '@angular/core/testing';

import { LoaddataService } from './loaddata.service';

describe('LoaddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaddataService = TestBed.get(LoaddataService);
    expect(service).toBeTruthy();
  });
});
