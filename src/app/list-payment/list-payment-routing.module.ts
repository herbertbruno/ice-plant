import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPaymentPage } from './list-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ListPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPaymentPageRoutingModule {}
