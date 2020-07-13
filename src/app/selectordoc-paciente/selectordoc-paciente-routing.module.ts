import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectordocPacientePage } from './selectordoc-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: SelectordocPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectordocPacientePageRoutingModule {}
