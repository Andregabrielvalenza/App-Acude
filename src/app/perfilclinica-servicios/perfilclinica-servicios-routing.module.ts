import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilclinicaServiciosPage } from './perfilclinica-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilclinicaServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilclinicaServiciosPageRoutingModule {}
