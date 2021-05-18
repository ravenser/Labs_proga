import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab3Page } from './lab3.page';

const routes: Routes = [
  {
    path: '',
    component: Lab3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab3PageRoutingModule {}
