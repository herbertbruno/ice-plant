import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCustomerPageRoutingModule } from './list-customer-routing.module';

import { ListCustomerPage } from './list-customer.page';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    Ng2SearchPipeModule,
    ListCustomerPageRoutingModule
  ],
  declarations: [ListCustomerPage]
})
export class ListCustomerPageModule {}
