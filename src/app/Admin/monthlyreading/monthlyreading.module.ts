import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyreadingPageRoutingModule } from './monthlyreading-routing.module';

import { MonthlyreadingPage } from './monthlyreading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlyreadingPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MonthlyreadingPage]
})
export class MonthlyreadingPageModule {}
