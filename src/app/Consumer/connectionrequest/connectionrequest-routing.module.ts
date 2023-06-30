import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectionrequestPage } from './connectionrequest.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectionrequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class ConnectionrequestPageRoutingModule {}
