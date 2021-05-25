import { TestBed } from '@angular/core/testing';

import { ActorListService } from './actor-list.service';

describe('ActorListService', () => {
  let service: ActorListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
