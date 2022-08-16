import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSalePageRoutingModule } from './list-sale-routing.module';

import { ListSalePage } from './list-sale.page';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSalePageRoutingModule,
    Ng2SearchPipeModule,
    TranslateModule.forChild()
  ],
  declarations: [ListSalePage]
})
export class ListSalePageModule {}
