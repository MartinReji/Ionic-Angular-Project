import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestviewmorePageRoutingModule } from './requestviewmore-routing.module';

import { RequestviewmorePage } from './requestviewmore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestviewmorePageRoutingModule
  ],
  declarations: [RequestviewmorePage]
})
export class RequestviewmorePageModule {}
