import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarDoctorPage } from './registrar-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarDoctorPageRoutingModule {}
