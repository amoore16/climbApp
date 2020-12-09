import { TestBed } from '@angular/core/testing';

import { AddClimbService } from './add-climb.service';

describe('AddClimbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddClimbService = TestBed.get(AddClimbService);
    expect(service).toBeTruthy();
  });
});
