import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  d:number;
  constructor() {}

  calc (a:number,b:number, c:number){
    if((a%2==0)&&(b%2==0)&&(c%2==0))
    this.d = a*b*c;
    else
    this.d = Math.pow(a*b*c,2);
  }
}
