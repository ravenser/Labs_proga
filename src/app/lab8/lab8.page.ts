import { Component, OnInit, Query } from '@angular/core';

import {Observable, BehaviorSubject, Subscription, from } from 'rxjs'

import * as firebase from 'firebase/app'

import {ConfigService} from './../service/Theateractors/config.service'
import {Theater} from './../service/Theateractors/theater.service'
import {TheaterList} from './../service/Theateractors/theater-list.service'
import {Actor} from './../service/Theateractors/actor.service'
import {ActorList} from './../service/Theateractors/actor-list.service'
import {FirebaseService} from './../service/dataBase/firebase.service'
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';


@Component({
  selector: 'app-lab8',
  templateUrl: './lab8.page.html',
  styleUrls: ['./lab8.page.scss'],
})
export class Lab8Page implements OnInit {
  showDetails: boolean[] = new Array(999).fill(false);
  theaters = new TheaterList();
  private subscriptions:Subscription[] = [];

  private configServise = new ConfigService();

  actorlst = new ActorList(this.configServise);

  
  theat: Theater;

  count = 0;

  dbActor = 'Actor';
  dbTheater = 'Theater';

  constructor(public fbService:FirebaseService) { }

  ngOnInit()
  {
    this.fetchTask(this.dbActor, 1);
    let taskresAct = this.fbService.getRecordList(this.dbActor, 1);
    taskresAct.snapshotChanges().subscribe()

    this.fetchTask(this.dbTheater, 2);
    let taskresTh = this.fbService.getRecordList(this.dbTheater, 2);
    taskresTh.snapshotChanges().subscribe()

    const theatSub = this.configServise.Theat$.subscribe(()=>{
      this.theat= this.configServise.Theat$.value;
    })
    this.subscriptions.push(theatSub);
  }

  toggleDetailsOn(i:number){
    if(!this.showDetails[i])
    this.showDetails[i] = true;
  }

  toggleDetailsOff(i:number){
    this.showDetails[i] = false;
  }

  fetchTask(db,op)
  {
    this.fbService.getRecordList(db,op).valueChanges().subscribe(res =>
      {
        if(op == 1) this.actorlst.actorList=res;
        else
        {
          this.theaters.TheaterLst = res;
          this.theat = this.theaters.TheaterLst[this.count];
          this.actorlst.search(this.theat.id);
        }
      })
  }

  nextTheater(){
    if (this.count < this.theaters.TheaterLst.length-1)
    {
      this.count++;
    }
    else 
    this.count=0;

    this.configServise.setTheater(this.theaters.TheaterLst[this.count]);
  }

  addActor(name, age, spectacle)
  {
    let actor = new Actor();
    actor.name = name;
    actor.age = age;
    actor.spectacle = spectacle;
    actor.idTheater = this.theat.id;
    this.fbService.CreateActor(actor);
    this.actorlst.search(this.theat.id);
    this.actorlst.addActor(actor);
  }

  addTheater(theat)
  {
    let th = new Theater();
    th.id = this.theaters.TheaterLst.length;
    th.name = theat;
    console.log(th.name + " " + th.id);
    this.fbService.CreateTheater(th);
  }

  deleteActor(obj:Actor, j:number)
  {
    let ref = this.fbService.bd.database.ref("Actor");
    let ke1;
    ref.orderByChild("name").equalTo(obj.name).on("child_added", function(snapshot){
      ke1 = snapshot.key;
    });
    let refKey = ref.child(ke1);
    refKey.remove();
    this.actorlst.rmActor(obj);
    this.toggleDetailsOff(j);
  }

  redactActor(obj:Actor, name:string, age:number, spectacle:string, j:number)
  {
    let ref = this.fbService.bd.database.ref("Actor");
    let ke1;
    ref.orderByChild("name").equalTo(obj.name).on("child_added", function(snapshot){
      ke1 = snapshot.key;
    });
    this.actorlst.rmActor(obj);
    obj.name = name;
    obj.age = age;
    obj.spectacle = spectacle;
    this.actorlst.actorList.push(obj);
    let refKey = ref.child(ke1);
    console.log(refKey);
    this.fbService.bd.database.ref("Actor/" + ke1).set({
      name: name,
      age: age,
      spectacle : spectacle,
      idTheater : obj.idTheater
    });
    this.actorlst.search(obj.idTheater);
    this.toggleDetailsOff(j);
  }

  redactTheater(name)
  {
    let ref = this.fbService.bd.database.ref("Theater");
    let ke1;
    ref.orderByChild("id").equalTo(this.theat.id).on("child_added", function(snapshot){
      ke1 = snapshot.key;
    });
    let refKey = ref.child(ke1);
    this.fbService.bd.database.ref("Theater/" + ke1).set({
      name: name,
      id: this.theat.id
    });
    console.log(refKey.key);
  }

  deleteTheater()
  {
    let ref = this.fbService.bd.database.ref("Theater");
    let refA = this.fbService.bd.database.ref("Actor");
    let id = this.theat.id;
    for(let i=0; i<this.actorlst.actorList.length; i++)
    {
      if(this.actorlst.actorList[i].idTheater == id)
        this.actorlst.rmActor(this.actorlst.actorList[i]);
    }
    this.theaters.rmTheater(this.theat);
    this.nextTheater();
    refA.once("child_added", function(snapshot){
      if(snapshot.child("idTheater").val()==id){
        snapshot.ref.remove();
      }
      
    });
    ref.once("child_added", function(snapshot){
      if(snapshot.child("id").val()==id)
      snapshot.ref.remove();
      //console.log(snapshot.child("name").val());
    });

  }

  ngOnDestroy(){
    this.subscriptions.forEach(s =>s.unsubscribe());
  }

}
