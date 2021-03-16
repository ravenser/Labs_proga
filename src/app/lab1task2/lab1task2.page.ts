import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab1task2',
  templateUrl: './lab1task2.page.html',
  styleUrls: ['./lab1task2.page.scss'],
})
export class Lab1task2Page implements OnInit {
  rez:number;
  constructor() { }
  calc(a:number, b:number){
    this.rez=0;
    var i:number=0;
    i=a;
    do{
      if((i%2==1)&&(i%7==0))
      this.rez++;
      i++;
    }while(i<=b)
  }
  ngOnInit() {
  }

}
