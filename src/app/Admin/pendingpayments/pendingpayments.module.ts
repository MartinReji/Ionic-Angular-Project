import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingpaymentsPageRoutingModule } from './pendingpayments-routing.module';

import { PendingpaymentsPage } from './pendingpayments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingpaymentsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PendingpaymentsPage]
})
export class PendingpaymentsPageModule {}
