import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RejectedconnectionPage } from './rejectedconnection.page';

const routes: Routes = [
  {
    path: '',
    component: RejectedconnectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejectedconnectionPageRoutingModule {}
