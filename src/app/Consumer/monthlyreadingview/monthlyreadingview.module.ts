import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyreadingviewPageRoutingModule } from './monthlyreadingview-routing.module';

import { MonthlyreadingviewPage } from './monthlyreadingview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlyreadingviewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MonthlyreadingviewPage]
})
export class MonthlyreadingviewPageModule {}
