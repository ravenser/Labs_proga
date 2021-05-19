import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab2PageRoutingModule } from './lab2-routing.module';

import { Lab2Page } from './lab2.page';

import {LabsHeaderComponent} from './../labs-header/labs-header.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab2PageRoutingModule
  ],
  declarations: [Lab2Page, LabsHeaderComponent]
})
export class Lab2PageModule {}
