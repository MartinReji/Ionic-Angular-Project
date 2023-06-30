import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejectedconnectionPageRoutingModule } from './rejectedconnection-routing.module';

import { RejectedconnectionPage } from './rejectedconnection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejectedconnectionPageRoutingModule
  ],
  declarations: [RejectedconnectionPage]
})
export class RejectedconnectionPageModule {}
