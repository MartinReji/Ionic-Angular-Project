import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanchayathviewPage } from './panchayathview.page';

const routes: Routes = [
  {
    path: '',
    component: PanchayathviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanchayathviewPageRoutingModule {}
