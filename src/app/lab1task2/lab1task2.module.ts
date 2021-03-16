import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab1task2PageRoutingModule } from './lab1task2-routing.module';

import { Lab1task2Page } from './lab1task2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab1task2PageRoutingModule
  ],
  declarations: [Lab1task2Page]
})
export class Lab1task2PageModule {}
