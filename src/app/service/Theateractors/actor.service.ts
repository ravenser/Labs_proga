import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Actor{
  idTheater:number;
  name:string;
  age:number;
  spectacle:string;
  constructor() { }
}
