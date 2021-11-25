import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Town4Page } from './town4.page';

const routes: Routes = [
  {
    path: '',
    component: Town4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Town4PageRoutingModule {}
