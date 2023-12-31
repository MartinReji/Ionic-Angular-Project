import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanchayathregistrationPageRoutingModule } from './panchayathregistration-routing.module';

import { PanchayathregistrationPage } from './panchayathregistration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanchayathregistrationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PanchayathregistrationPage]
})
export class PanchayathregistrationPageModule {}
