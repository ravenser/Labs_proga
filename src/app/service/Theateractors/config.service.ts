import { Injectable } from '@angular/core';

import {Theater} from './theater.service';
import {TheaterList} from './theater-list.service'

import {Observable, BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  currentTheater = DEFAULT_THEATER;
  Theat$: BehaviorSubject<Theater> = new BehaviorSubject<Theater>(DEFAULT_THEATER); 

  setTheater(theater:Theater)
  {
    console.log('Змінилося');
    this.Theat$.next(theater);
  }

  constructor() { }
  
}

var theaterList = new TheaterList();

const DEFAULT_THEATER =  theaterList.TheaterLst.get(0);
