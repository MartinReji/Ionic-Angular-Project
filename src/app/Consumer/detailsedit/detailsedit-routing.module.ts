import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailseditPage } from './detailsedit.page';

const routes: Routes = [
  {
    path: '',
    component: DetailseditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailseditPageRoutingModule {}
