import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchconsumerPageRoutingModule } from './searchconsumer-routing.module';

import { SearchconsumerPage } from './searchconsumer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchconsumerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SearchconsumerPage]
})
export class SearchconsumerPageModule {}
