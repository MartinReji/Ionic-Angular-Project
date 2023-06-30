import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanchayathregistrationPage } from './panchayathregistration.page';

const routes: Routes = [
  {
    path: '',
    component: PanchayathregistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanchayathregistrationPageRoutingModule {}
