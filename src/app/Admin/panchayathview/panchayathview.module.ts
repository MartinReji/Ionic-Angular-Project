import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanchayathviewPageRoutingModule } from './panchayathview-routing.module';

import { PanchayathviewPage } from './panchayathview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanchayathviewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PanchayathviewPage]
})
export class PanchayathviewPageModule {}
