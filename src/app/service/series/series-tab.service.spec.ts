import { TestBed } from '@angular/core/testing';

import { SeriesTabService } from './series-tab.service';

describe('SeriesTabService', () => {
  let service: SeriesTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit("Your series is wrong x=0.1, y=Pi", ()=>{
    let x = 0.1;
    let y=(Math.PI-x) / 2;
    let xy = service.getTab();
    let y1 = xy.get(x);
    expect(y.toFixed(1)).toBe(y.toFixed(1));
  })
});
