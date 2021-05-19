import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab4PageRoutingModule } from './lab4-routing.module';

import { Lab4Page } from './lab4.page';

import {LabsHeaderComponent} from './../labs-header/labs-header.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab4PageRoutingModule
  ],
  declarations: [Lab4Page, LabsHeaderComponent]
})
export class Lab4PageModule {}
