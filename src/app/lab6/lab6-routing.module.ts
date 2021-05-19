import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab6Page } from './lab6.page';

const routes: Routes = [
  {
    path: '',
    component: Lab6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab6PageRoutingModule {}
