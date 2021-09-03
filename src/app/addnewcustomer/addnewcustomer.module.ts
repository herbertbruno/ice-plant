import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewcustomerPageRoutingModule } from './addnewcustomer-routing.module';

import { AddnewcustomerPage } from './addnewcustomer.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    AddnewcustomerPageRoutingModule
  ],
  declarations: [AddnewcustomerPage]
})
export class AddnewcustomerPageModule {}
