import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab1task2Page } from './lab1task2.page';

const routes: Routes = [
  {
    path: '',
    component: Lab1task2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab1task2PageRoutingModule {}
