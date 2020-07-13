import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedaAvanzadaPage } from './busqueda-avanzada.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaAvanzadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedaAvanzadaPageRoutingModule {}
