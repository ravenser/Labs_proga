import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab8Page } from './lab8.page';

const routes: Routes = [
  {
    path: '',
    component: Lab8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab8PageRoutingModule {}
