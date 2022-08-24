import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListWorkerPageRoutingModule } from './list-worker-routing.module';

import { ListWorkerPage } from './list-worker.page';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListWorkerPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ListWorkerPage]
})
export class ListWorkerPageModule {}
