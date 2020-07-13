import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OftalmologiaPage } from './oftalmologia.page';

const routes: Routes = [
  {
    path: '',
    component: OftalmologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OftalmologiaPageRoutingModule {}
