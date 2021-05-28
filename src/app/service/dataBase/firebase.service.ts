import { Injectable } from '@angular/core';
import {Actor} from './../Theateractors/actor.service';
import {Theater} from './../Theateractors/theater.service';

import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  actorListRef: AngularFireList<any>;
  TheaterListRef: AngularFireList<any>;
  dbRef: AngularFireObject<any>;
  constructor(public bd: AngularFireDatabase) { }

  CreateActor(actor: Actor)
  {
    
    return this.actorListRef.push(
      {
        age:actor.age,
        name:actor.name,
        idTheater:actor.idTheater,
        spectacle:actor.spectacle
      }
    )
  }
  CreateTheater(theat: Theater)
  {
    return this.TheaterListRef.push(
      {
        name:theat.name,
        id:theat.id
      }
    );
  }

  GetRecord(id:string, db:string)
  {
    this.dbRef = this.bd.object('/'+ db + id);
    return this.dbRef;
  }

  //1 actor,
  //2 theater
  getRecordList(db:string, op:number)
  {
    if(op == 1)
    {
      this.actorListRef = this.bd.list('/'+db);
      return this.actorListRef;
    }
    else
    {
      this.TheaterListRef = this.bd.list('/'+db);
      return this.TheaterListRef;
    }
  }
}
