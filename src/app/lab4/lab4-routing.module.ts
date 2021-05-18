import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab4Page } from './lab4.page';

const routes: Routes = [
  {
    path: '',
    component: Lab4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab4PageRoutingModule {}
