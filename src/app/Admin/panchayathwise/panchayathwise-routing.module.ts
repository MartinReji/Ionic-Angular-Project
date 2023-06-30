import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanchayathwisePage } from './panchayathwise.page';

const routes: Routes = [
  {
    path: '',
    component: PanchayathwisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanchayathwisePageRoutingModule {}
