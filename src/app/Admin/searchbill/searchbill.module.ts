import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbillPageRoutingModule } from './searchbill-routing.module';

import { SearchbillPage } from './searchbill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbillPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SearchbillPage]
})
export class SearchbillPageModule {}
