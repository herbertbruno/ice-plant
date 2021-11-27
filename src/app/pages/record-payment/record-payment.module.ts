import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordPaymentPageRoutingModule } from './record-payment-routing.module';

import { RecordPaymentPage } from './record-payment.page';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    RecordPaymentPageRoutingModule
  ],
  declarations: [RecordPaymentPage]
})
export class RecordPaymentPageModule {}
