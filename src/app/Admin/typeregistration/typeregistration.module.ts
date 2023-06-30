import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TyperegistrationPageRoutingModule } from './typeregistration-routing.module';

import { TyperegistrationPage } from './typeregistration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TyperegistrationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TyperegistrationPage]
})
export class TyperegistrationPageModule {}
