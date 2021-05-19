import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab3PageRoutingModule } from './lab3-routing.module';

import { Lab3Page } from './lab3.page';

import {LabsHeaderComponent} from './../labs-header/labs-header.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab3PageRoutingModule
  ],
  declarations: [Lab3Page, LabsHeaderComponent]
})
export class Lab3PageModule {}
