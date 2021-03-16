import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab2Page } from './lab2.page';

const routes: Routes = [
  {
    path: '',
    component: Lab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab2PageRoutingModule {}
