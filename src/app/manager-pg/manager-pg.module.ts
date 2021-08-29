import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerPgPageRoutingModule } from './manager-pg-routing.module';

import { ManagerPgPage } from './manager-pg.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    ManagerPgPageRoutingModule
  ],
  declarations: [ManagerPgPage]
})
export class ManagerPgPageModule {}
