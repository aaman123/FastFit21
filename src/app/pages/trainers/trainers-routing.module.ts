import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainersPage } from './trainers.page';

const routes: Routes = [
  {
    path: '',
    component: TrainersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainersPageRoutingModule {}
