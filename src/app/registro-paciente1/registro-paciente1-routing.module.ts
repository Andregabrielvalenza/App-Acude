import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPaciente1Page } from './registro-paciente1.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPaciente1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPaciente1PageRoutingModule {}
