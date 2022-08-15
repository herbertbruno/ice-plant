import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListExpensePageRoutingModule } from './list-expense-routing.module';

import { ListExpensePage } from './list-expense.page';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ListExpensePageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [ListExpensePage]
})
export class ListExpensePageModule {}
