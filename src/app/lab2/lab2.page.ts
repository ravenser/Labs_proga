import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import { reduce } from 'rxjs-compat/operator/reduce';
@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.page.html',
  styleUrls: ['./lab2.page.scss'],
})
export class Lab2Page implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  lineChart: any;
  arrx:string[];
  arry:number[];
  data = [];
  xn: number;
  xk:number;
  a:number;
  h:number;
  constructor() { }
  ngOnInit() {}

  lineChartMethod(){
    this.lineChart = new Chart(this.lineCanvas.nativeElement,{
      type: 'line',
      data: {
        labels: this.arrx,
        datasets:[{
          label: 'Графік функції',
          fill:false,
          data: this.arry,
          borderColor: 'Black',
        }]
      }
    });
  }
  chartCalc (xn:string, xk:string, a:string, h:string)
  {
    this.data =[];
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.a = parseFloat(a);
    this.h = parseFloat(h);
    let x:number, y:number, i:number=0;
    x = this.xn;
    this.arrx = new Array();
    this.arry = new Array();
    do
    {
      if(x<=0)
      {
        y=Math.log(x*x+5);
      }else
      if(x<=this.a)
      {
        y=Math.sin(Math.exp(x)+2)
      }
      else
      {
        y=Math.tan(5*x+1)
      }
      this.arrx.push(x.toFixed(1));
      this.arry.push(parseFloat(y.toFixed(1)));
      x+=this.h;
    }
    while(x < this.xk)
    this.lineChartMethod();
  }
}
