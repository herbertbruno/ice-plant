import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSalePageRoutingModule } from './list-sale-routing.module';

import { ListSalePage } from './list-sale.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSalePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ListSalePage]
})
export class ListSalePageModule {}
