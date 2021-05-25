import { Component, OnInit } from '@angular/core';

import {Observable, BehaviorSubject, Subscription } from 'rxjs'

import {ConfigService} from './../service/Theateractors/config.service'
import {Theater} from './../service/Theateractors/theater.service'
import {TheaterList} from './../service/Theateractors/theater-list.service'
import {Actor} from './../service/Theateractors/actor.service'
import {ActorList} from './../service/Theateractors/actor-list.service'



@Component({
  selector: 'app-lab8',
  templateUrl: './lab8.page.html',
  styleUrls: ['./lab8.page.scss'],
})
export class Lab8Page implements OnInit {

  theaters = new TheaterList();
  private subscriptions:Subscription[] = [];

  private configServise = new ConfigService();

  actorlst = new ActorList(this.configServise);

  
  theat: Theater;

  count = 0;

  constructor() { }

  ngOnInit()
  {
    const theatSub = this.configServise.Theat$.subscribe(()=>{
      this.theat= this.configServise.Theat$.value;
    })
    this.subscriptions.push(theatSub);
  }

  nextTheater(){
    if (this.count < this.theaters.TheaterLst.size-1)
    {
      this.count++;
    }
    else 
    this.count=0;

    this.configServise.setTheater(this.theaters.TheaterLst.get(this.count));
  }

  addActor(name, age, spectacle)
  {
    let actor = new Actor();
    actor.name = name;
    actor.age = age;
    actor.spectacle = spectacle;
    actor.idTheater = this.theat.id;
    this.actorlst.addActor(actor);
  }

  addTheater(theat)
  {
    let th = new Theater();
    th.id = this.theaters.TheaterLst.size;
    th.name = theat;
    this.theaters.add(th);
  }

  ngOnDestroy(){
    this.subscriptions.forEach(s =>s.unsubscribe());
  }

}
