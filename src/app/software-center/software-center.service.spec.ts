import { TestBed } from '@angular/core/testing';

import { SoftwareCenterService } from './software-center.service';

describe('SoftwareCenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoftwareCenterService = TestBed.get(SoftwareCenterService);
    expect(service).toBeTruthy();
  });
});
