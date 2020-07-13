import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarDoctorPageRoutingModule } from './registrar-doctor-routing.module';

import { RegistrarDoctorPage } from './registrar-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarDoctorPageRoutingModule
  ],
  declarations: [RegistrarDoctorPage]
})
export class RegistrarDoctorPageModule {}
