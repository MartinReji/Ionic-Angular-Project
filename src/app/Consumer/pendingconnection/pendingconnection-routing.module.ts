import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingconnectionPage } from './pendingconnection.page';

const routes: Routes = [
  {
    path: '',
    component: PendingconnectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingconnectionPageRoutingModule {}
