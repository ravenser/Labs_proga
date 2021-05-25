import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab7Page } from './lab7.page';

const routes: Routes = [
  {
    path: '',
    component: Lab7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab7PageRoutingModule {}
