import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilDoctorPage } from './perfil-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilDoctorPageRoutingModule {}
