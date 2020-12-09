import { TestBed } from '@angular/core/testing';

import { MyClimbsService } from './my-climbs.service';

describe('MyClimbsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyClimbsService = TestBed.get(MyClimbsService);
    expect(service).toBeTruthy();
  });
});
