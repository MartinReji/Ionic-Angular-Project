import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TyperegistrationPage } from './typeregistration.page';

const routes: Routes = [
  {
    path: '',
    component: TyperegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TyperegistrationPageRoutingModule {}
