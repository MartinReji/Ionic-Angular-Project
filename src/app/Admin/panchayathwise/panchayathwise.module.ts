import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanchayathwisePageRoutingModule } from './panchayathwise-routing.module';

import { PanchayathwisePage } from './panchayathwise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanchayathwisePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PanchayathwisePage]
})
export class PanchayathwisePageModule {}
