import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab8PageRoutingModule } from './lab8-routing.module';

import { Lab8Page } from './lab8.page';

import {LabsHeaderComponent} from './../labs-header/labs-header.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab8PageRoutingModule
  ],
  declarations: [Lab8Page, LabsHeaderComponent]
})
export class Lab8PageModule {}
