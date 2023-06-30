import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectionrequestPageRoutingModule } from './connectionrequest-routing.module';

import { ConnectionrequestPage } from './connectionrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectionrequestPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConnectionrequestPage]
})
export class ConnectionrequestPageModule {}
