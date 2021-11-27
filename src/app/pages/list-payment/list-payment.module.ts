import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPaymentPageRoutingModule } from './list-payment-routing.module';

import { ListPaymentPage } from './list-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPaymentPageRoutingModule
  ],
  declarations: [ListPaymentPage]
})
export class ListPaymentPageModule {}
