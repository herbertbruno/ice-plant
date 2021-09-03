import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewcustomerPage } from './addnewcustomer.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewcustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewcustomerPageRoutingModule {}
