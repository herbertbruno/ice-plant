import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerPgPage } from './manager-pg.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerPgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerPgPageRoutingModule {}
