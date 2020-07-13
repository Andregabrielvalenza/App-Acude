import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPacientePage } from './registro-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPacientePageRoutingModule {}
