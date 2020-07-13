import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadosFiltroMapaPage } from './resultados-filtro-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadosFiltroMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadosFiltroMapaPageRoutingModule {}
