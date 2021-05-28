import { Injectable } from '@angular/core';
import {Theater} from "./theater.service"
@Injectable({
  providedIn: 'root'
})
export class TheaterList {
TheaterLst = new Array();
  constructor() {}
  add(theater:Theater)
  {
    this.TheaterLst.push(theater);
  }
  rmTheater(theat:Theater){
    let ind = -1;
    for( let i=0; i< this.TheaterLst.length; i++)
    {
      if (this.TheaterLst[i].name == theat.name && this.TheaterLst[i].id == theat.id)
      {
        ind = i;
      }
    }
    this.TheaterLst.splice(ind,1);
  }
}
