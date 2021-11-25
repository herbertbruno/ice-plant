import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Town4PageRoutingModule } from './town4-routing.module';

import { Town4Page } from './town4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Town4PageRoutingModule
  ],
  declarations: [Town4Page]
})
export class Town4PageModule {}
