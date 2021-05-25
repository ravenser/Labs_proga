import { Injectable, Optional } from '@angular/core';
import {LogService} from './../logger/log.service'


@Injectable({
  providedIn: 'root'
})
export class RecTabService {
private xy=new Map();
  constructor(@Optional() private logService: LogService) { }

  getRecursion(x:number, i:number, sum:number):number
  {
    let min = 1E-5, t:number=0;

    t =  Math.sin(i*x) / i;
    sum = sum + t;
    if(Math.abs(t)>min)
     sum = this.getRecursion(x,i+1,sum);
    return sum;
  }

  getTab(xStart: number = 0.1, xEnd:number = Math.PI, h:number = 0.1):Map<number, number>
  {
    let x = xStart, y =0.0;
    while(x<=xEnd)
    {
      y = this.getRecursion(x,1,0);
      this.xy.set(x,y);
      if (this.logService)
        this.logService.write("x= " + x.toFixed(2)+ " y= " + y.toFixed(4));
      x=x+h;
    }
    return this.xy;
  }
}
