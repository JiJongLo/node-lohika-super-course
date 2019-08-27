import { TestBed } from '@angular/core/testing';

import { InfoSystemService } from './info-system.service';

describe('InfoSystemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoSystemService = TestBed.get(InfoSystemService);
    expect(service).toBeTruthy();
  });
});
