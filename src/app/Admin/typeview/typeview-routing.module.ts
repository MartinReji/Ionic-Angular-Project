import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeviewPage } from './typeview.page';

const routes: Routes = [
  {
    path: '',
    component: TypeviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeviewPageRoutingModule {}
