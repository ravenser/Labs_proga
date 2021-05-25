import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';

import { Chart } from 'chart.js';

import {RecTabService} from './../service/recuresion/rec-tab.service'
import {SeriesTabService} from './../service/series/series-tab.service'
import {TabService} from './../service/tabber/tab.service'

@Component({
  selector: 'app-lab7',
  templateUrl: './lab7.page.html',
  styleUrls: ['./lab7.page.scss'],
})
export class Lab7Page implements OnInit {

  xyTabnorm = new Map();
  xyTabSeries = new Map();
  xyTabRecursion = new Map();
  @ViewChild('lineCanvas1') private lineCanvas1: ElementRef;
  @ViewChild('lineCanvas2') private lineCanvas2: ElementRef;
  @ViewChild('lineCanvas3') private lineCanvas3: ElementRef;
  lineChart: any;
  lineChart1: any;
  lineChart2: any;
  arrx1:string[];
  arry1:string[];
  arrx2:string[];
  arry2:string[];
  arrx3:string[];
  arry3:string[];
  data = [];
  constructor(private tabServise:TabService, private seriesTabServise:SeriesTabService, private recTabServise:RecTabService){}
  ngOnInit() {  }
  lineChartMethod(){
    this.lineChart = new Chart(this.lineCanvas1.nativeElement,{
      type: 'line',
      data: {
        labels: this.arrx1,
        datasets:[{
          label: 'Графік звичайної функції ',
          fill:false,
          data: this.arry1,
          borderColor: 'Black',
        }]
      }
    });
    this.lineChart1 = new Chart(this.lineCanvas2.nativeElement,{
      type: 'line',
      data: {
        labels: this.arrx2,
        datasets:[{
          label: 'Графік функції реалізованої рядами',
          fill:false,
          data: this.arry2,
          borderColor: 'Black',
        }]
      }
    });
    this.lineChart2 = new Chart(this.lineCanvas3.nativeElement,{
      type: 'line',
      data: {
        labels: this.arrx3,
        datasets:[{
          label: 'Графік функції реалізованої рекурсією',
          fill:false,
          data: this.arry3,
          borderColor: 'Black',
        }]
      }
    });
  }

  ras(xStartt:string, xEndt:string, ht:string)
  {
    let xStart:number = parseFloat(xStartt),
    xEnd:number = parseFloat(xEndt), 
    h:number = parseFloat(ht), x:number = xStart;
    this.arrx1 = new Array();
    this.arry1 = new Array();
    this.arrx2 = new Array();
    this.arry2 = new Array();
    this.arrx3 = new Array();
    this.arry3 = new Array();
    console.log("Tab Normal");
    this.xyTabnorm = this.tabServise.getTab(xStart,xEnd,h);
    console.log("Tab Series");
    this.xyTabSeries = this.seriesTabServise.getTab(xStart,xEnd,h);
    console.log("Tab Recursion")
    this.xyTabRecursion = this.recTabServise.getTab(xStart,xEnd,h);
    do{
      this.arrx1.push(x.toFixed(2));
      let y:number = this.xyTabnorm.get(x);
      this.arry1.push(y.toFixed(4));
      this.arrx2.push(x.toFixed(2));
      y = this.xyTabSeries.get(x);
      this.arry2.push(y.toFixed(4));
      this.arrx3.push(x.toFixed(2));
      y = this.xyTabRecursion.get(x);
      this.arry3.push(y.toFixed(4));
      x+=h;
    }
    while(x<=xEnd)
    this.lineChartMethod();
  }

}
