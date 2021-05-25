import { TestBed } from '@angular/core/testing';

import { TheaterListService } from './theater-list.service';

describe('TheaterListService', () => {
  let service: TheaterListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheaterListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
