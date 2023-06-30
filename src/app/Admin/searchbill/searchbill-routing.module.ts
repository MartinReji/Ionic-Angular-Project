import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchbillPage } from './searchbill.page';

const routes: Routes = [
  {
    path: '',
    component: SearchbillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchbillPageRoutingModule {}
