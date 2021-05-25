import { Injectable } from '@angular/core';
import {Theater} from "./theater.service"
@Injectable({
  providedIn: 'root'
})
export class TheaterList {
TheaterLst = new Map();
  constructor() {
    this.TheaterLst.set(0,{id:0, name:"Shevchenko"});
    this.TheaterLst.set(1,{id:1, name:"Filarmonia"});
   }
  add(theater:Theater)
  {
    this.TheaterLst.set(theater.id,{id:theater.id, name:theater.name});
  }
}
