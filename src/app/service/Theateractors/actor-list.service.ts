import { Injectable } from '@angular/core';

import{Actor} from './actor.service'

import{ ConfigService } from './config.service'

@Injectable({
  providedIn: 'root'
})
export class ActorList {
  actorList = new Array();
  searchActor = new Array();

  theatSub = this.configService.Theat$.subscribe( () =>{
    let theater = this.configService.Theat$.value;
    this.search(theater.id);
  })

  constructor(private configService:ConfigService) {}

  addActor(actor:Actor)
  {
    this.actorList.push(actor);
    this.search(actor.idTheater);
  }

  rmActor(actor: Actor)
  {
    let ind = -1;
    for( let i=0; i< this.actorList.length; i++)
    {
      if (actor.name == this.actorList[i].name && actor.age == this.actorList[i].age && actor.spectacle == this.actorList[i].spectacle && actor.idTheater == this.actorList[i].idTheater)
      {
        ind = i;
      }
    }
    this.actorList.splice(ind,1);
    this.search(actor.idTheater);
  }

  search(id_theater){
    this.searchActor = this.actorList.filter((actor) => {return actor.idTheater == id_theater;})
  }


}
