import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailseditPageRoutingModule } from './detailsedit-routing.module';

import { DetailseditPage } from './detailsedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailseditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DetailseditPage]
})
export class DetailseditPageModule {}
