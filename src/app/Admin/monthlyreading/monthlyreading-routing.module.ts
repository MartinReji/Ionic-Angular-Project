import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyreadingPage } from './monthlyreading.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyreadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyreadingPageRoutingModule {}
