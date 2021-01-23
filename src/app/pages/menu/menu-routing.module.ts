import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { HomePage } from 'src/app/home/home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MenuPage,
   children: [
    {
      path: 'home',
      children: [
        {
        path:'',
        loadChildren: () => import('../../home/home.module').then(m => m.HomePageModule),
        }
      ]
      
    },
    
    {
      path: 'trainers',
      children: [
        {
          path:'',
          loadChildren: () => import('../../pages/trainers/trainers.module').then(m => m.TrainersPageModule)
        }
      ]
    }

   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
