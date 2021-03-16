import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'lab1_1',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: 'lab1_1',
        pathMatch: 'full'
      },
      {
        path: 'lab1_2',
      loadChildren: () => import('../lab1task2/lab1task2.module').then( m => m.Lab1task2PageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
