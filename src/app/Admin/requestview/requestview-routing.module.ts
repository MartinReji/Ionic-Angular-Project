import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestviewPage } from './requestview.page';

const routes: Routes = [
  {
    path: '',
    component: RequestviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestviewPageRoutingModule {}
