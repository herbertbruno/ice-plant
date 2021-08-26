import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerPageRoutingModule } from './worker-routing.module';

import { WorkerPage } from './worker.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),


    WorkerPageRoutingModule
  ],
  declarations: [WorkerPage]
})
export class WorkerPageModule {}
