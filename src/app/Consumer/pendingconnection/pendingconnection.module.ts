import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingconnectionPageRoutingModule } from './pendingconnection-routing.module';

import { PendingconnectionPage } from './pendingconnection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingconnectionPageRoutingModule
  ],
  declarations: [PendingconnectionPage]
})
export class PendingconnectionPageModule {}
