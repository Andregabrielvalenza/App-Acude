import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstablecimientosSaludPage } from './establecimientos-salud.page';

const routes: Routes = [
  {
    path: '',
    component: EstablecimientosSaludPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstablecimientosSaludPageRoutingModule {}
