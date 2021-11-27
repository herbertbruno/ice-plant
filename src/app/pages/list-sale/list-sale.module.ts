import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSalePageRoutingModule } from './list-sale-routing.module';

import { ListSalePage } from './list-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSalePageRoutingModule
  ],
  declarations: [ListSalePage]
})
export class ListSalePageModule {}
