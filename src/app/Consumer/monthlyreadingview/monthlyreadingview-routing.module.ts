import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyreadingviewPage } from './monthlyreadingview.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyreadingviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyreadingviewPageRoutingModule {}
