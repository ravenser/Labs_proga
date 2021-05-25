import { NgModule, ViewChild, ElementRef,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab7PageRoutingModule } from './lab7-routing.module';

import { Lab7Page } from './lab7.page';

import {LabsHeaderComponent} from './../labs-header/labs-header.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab7PageRoutingModule
  ],
  declarations: [Lab7Page, LabsHeaderComponent]
})
export class Lab7PageModule{}
