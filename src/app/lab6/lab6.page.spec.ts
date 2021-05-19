import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { from } from 'rxjs';

import { Lab6Page, Textbook, Magazine, Fiction} from './lab6.page';

describe ('Fiction, Magazine and TextBook testing', () =>
{
  let fiction:Fiction;
  let textBook:Textbook;
  let magazine:Magazine;

  beforeEach(()=>
  {
    fiction = new Fiction("LOTR", 321312, "Fantasy");
    textBook = new Textbook("7 class Math manual", 123123, "Math");
    magazine = new Magazine("Young engineer", 123, "BLueprints");
  })

  fit("Creating Fiction object", ()=>
  {
    expect(fiction).toBeTruthy();
  })

  fit("Creating TextBook object", ()=>
  {
    expect(textBook).toBeTruthy();
  })

  fit("Creating Magazine object", ()=>
  {
    expect(magazine).toBeTruthy();
  })


})