import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeeditPageRoutingModule } from './typeedit-routing.module';

import { TypeeditPage } from './typeedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeeditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TypeeditPage]
})
export class TypeeditPageModule {}
