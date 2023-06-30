import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeviewPageRoutingModule } from './typeview-routing.module';

import { TypeviewPage } from './typeview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeviewPageRoutingModule
  ],
  declarations: [TypeviewPage]
})
export class TypeviewPageModule {}
