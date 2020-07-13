import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelemedicinaPage } from './telemedicina.page';

const routes: Routes = [
  {
    path: '',
    component: TelemedicinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelemedicinaPageRoutingModule {}
