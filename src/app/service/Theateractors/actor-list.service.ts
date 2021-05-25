import { Injectable } from '@angular/core';

import{Actor} from './actor.service'

import{ ConfigService } from './config.service'

@Injectable({
  providedIn: 'root'
})
export class ActorList {
  private actorList = new Array();
  private searchActor = new Array();
  searchActorResult:string[];

  theatSub = this.configService.Theat$.subscribe( () =>{
    let theater = this.configService.Theat$.value;
    this.search(theater.id);
  })

  constructor(private configService:ConfigService) 
  {
    let actor1 = new Actor();
    actor1.name = "Ivan";
    actor1.age = 27;
    actor1.idTheater = 0;
    actor1.spectacle = "Romeo and Juliet"
    this.addActor(actor1);
    let actor2 = new Actor();
    actor2.name = "Dima";
    actor2.age = 22;
    actor2.idTheater = 1;
    actor2.spectacle = "Faust";
    this.addActor(actor2);
  }

  addActor(actor:Actor)
  {
    this.actorList.push(actor);
    this.search(actor.idTheater);
  }
  search(id_theater){
    this.searchActor = this.actorList.filter((actor) => {return actor.idTheater == id_theater;})
    this.searchActorResult=[];
    this.searchActor.forEach(el=>{
      this.searchActorResult.push("Ім'я: " + el.name);
      this.searchActorResult.push(' Вік: ' + el.age);
      this.searchActorResult.push(' Виступ: ' + el.spectacle);
     })
  }


}
