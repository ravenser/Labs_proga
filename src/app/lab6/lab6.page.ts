import { BuiltinType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.page.html',
  styleUrls: ['./lab6.page.scss'],
})


export class Lab6Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addMagazine(name:string, printing:number, pictures:string){
    let magazine = new Magazine(name, printing, pictures);
    magazine.buy();
    magazine.look();
  }

  addBook(name:string, printing:number, genre:string){
    let book = new Fiction(name, printing, genre);
    book.buy();
    book.read();
  }

  addTextBook(name:string, printing:number, genre:string){
    let textBook = new Textbook(name, printing, genre);
    textBook.buy();
    textBook.learn();
  }
}

/////////////////////////////Interfaces////////////////////////////////////////

interface Iprinting 
{
  name: string;
  printing: number;
}

interface Iread
{
  read();
}

interface Ibuy
{
  buy();
}

interface Ilearn
{
  learn();
}

interface Ilook
{
  look();
}

/////////////////////////////Classes////////////////////////////////////////

abstract class Printing implements Iprinting
{
  name: string;
 printing: number;

  constructor(name:string, printing:number)
  {
    this.name = name;
    this.printing = printing;
  }
}

abstract class Book extends Printing 
{
  public genre: string;

  constructor(name: string, printing: number, genre: string)
  {
    super(name,printing);
    this.genre = genre;
  }

} 

export class Fiction extends Book implements Iread, Ibuy
{

  constructor(name: string, printing: number, genre: string)
  {
    super(name, printing, genre);
  }

  buy()
  {
    alert("Bought " + this.name)
  }

  read()
  {
    alert("Read " + this.name)
  }
} 

export class Textbook extends Book implements Ilearn, Ibuy
{
  constructor(name: string, printing: number, genre: string)
  {
    super(name, printing, genre);
  }

  buy()
  {
    alert("Bought " + this.name)
  }

  learn()
  {
    alert("Learn " + this.name)
  } 
}

export class Magazine extends Printing implements Ilook, Ibuy
{
  public pictures: string;

  constructor(name: string, printing: number, pictures: string)
  {
    super(name, printing);
    this.pictures = pictures;
  }

  look()
  {
    alert("Look " + this.pictures)
  }

  buy()
  {
    alert("Bought " + this.name )
  }

}
