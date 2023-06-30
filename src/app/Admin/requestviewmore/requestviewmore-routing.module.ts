import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestviewmorePage } from './requestviewmore.page';

const routes: Routes = [
  {
    path: '',
    component: RequestviewmorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestviewmorePageRoutingModule {}
