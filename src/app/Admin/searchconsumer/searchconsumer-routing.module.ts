import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchconsumerPage } from './searchconsumer.page';

const routes: Routes = [
  {
    path: '',
    component: SearchconsumerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchconsumerPageRoutingModule {}
