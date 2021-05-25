import { Injectable, Optional } from '@angular/core';
import { LogService } from './../logger/log.service'

@Injectable({
  providedIn: 'root'
})
export class SeriesTabService {
private xy=new Map();
  constructor(@Optional() private logService: LogService) { }
  getSeries(x:number)
  {
    let sum:number = 0,
    i = 1, min = 1E-5,
    t=0;

    do{
      t =  Math.sin(i*x) / i;
      sum = sum + t;
      i=i+1;
    }
    while(Math.abs(t) > min)
    return sum;
  }
  getTab(xStart: number = 0.1, xEnd:number = Math.PI, h:number = 0.1):Map<number, number>
  {
    let x = xStart, y =0.0;
    while(x<=xEnd)
    {
      y = this.getSeries(x);
      this.xy.set(x,y);
      if (this.logService)
        this.logService.write("x= " + x.toFixed(2)+ " y= " + y.toFixed(4));
      x=x+h;
    }
    return this.xy;
  }
  
}
