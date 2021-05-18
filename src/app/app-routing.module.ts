import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'lab2',
    loadChildren: () => import('./lab2/lab2.module').then( m => m.Lab2PageModule)
  },
  {
    path: 'lab3',
    loadChildren: () => import('./lab3/lab3.module').then( m => m.Lab3PageModule)
  },
  {
    path: 'lab4',
    loadChildren: () => import('./lab4/lab4.module').then( m => m.Lab4PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
