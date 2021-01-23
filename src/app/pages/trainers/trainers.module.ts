import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainersPageRoutingModule } from './trainers-routing.module';

import { TrainersPage } from './trainers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainersPageRoutingModule
  ],
  declarations: [TrainersPage]
})
export class TrainersPageModule {}
