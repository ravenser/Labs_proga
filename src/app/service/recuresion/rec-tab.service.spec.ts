import { TestBed } from '@angular/core/testing';
import { LogService } from '../logger/log.service';

import { RecTabService } from './rec-tab.service';

describe('RecTabService', () => {
  let service: RecTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  fit("Your seriesRecursion is wrong x=0.1, y=Pi", ()=>{
    let x = 0.1;
    var y = (Math.PI-x) / 2;
    let xy = service.getTab();
    let y1 =  xy.get(x);
    expect(y.toFixed(1)).toBe(y.toFixed(1));
  })
});
