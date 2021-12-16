import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../../pipe/pipe.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    TranslateModule.forChild(),
    MessageComponentModule,
    HomePageRoutingModule
  ],
  // entryComponents: [PlantFooterComponent],
  declarations: [HomePage]
})
export class HomePageModule { }
