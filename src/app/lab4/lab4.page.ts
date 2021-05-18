import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.page.html',
  styleUrls: ['./lab4.page.scss'],
})
export class Lab4Page implements OnInit {
  Cars: Car[];
  constructor() {
    this.Cars = new Array()
   }

  ClearCar(){
    this.Cars = new Array()
  }

  AddLight(name: string, Vengine:number){
    this.Cars.push(new LightCar(name, Vengine));
  }

  AddFreight(name:string, carrying:number){
    this.Cars.push(new FreightCar(name, carrying));
  }

  FuelCounting()
  {
    let t=0;
    for(let i = 0; i < this.Cars.length; i++)
      t+= this.Cars[i].FuelWasting();
    return t;
  }


  ngOnInit() {
  }

}

abstract class Car{
  name: string;

  constructor(name: string)
  {
    this.name = name;
  }

  abstract FuelWasting();
  abstract show();
}


export class FreightCar extends Car{
  carrying: number;

  constructor(public name: string, carrying: number){
    super(name);
    this.carrying = carrying;
  }

  FuelWasting(){
    return 100*this.carrying;
  }

  show(){
    return ("Назва: " + this.name + ", Вантажопід'ємність " + this.carrying + ", Витрати пального " + this.FuelWasting() + ";")
  }
}

export class LightCar extends Car{
  Vengine: number;

  constructor(public name:string, Vengine: number){
    super(name);
    this.Vengine = Vengine;
  }

  FuelWasting(){
    return 2.5*this.Vengine
  }

  show(){
    return ("Назва: " + this.name + ", Об'єм двигуна " + this.Vengine + ", Витрати пального " + this.FuelWasting() + ";")
  }
}

