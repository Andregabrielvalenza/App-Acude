import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilclinicaDoctorPage } from './perfilclinica-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilclinicaDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilclinicaDoctorPageRoutingModule {}
