import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilclinicaDoctorPageRoutingModule } from './perfilclinica-doctor-routing.module';

import { PerfilclinicaDoctorPage } from './perfilclinica-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilclinicaDoctorPageRoutingModule
  ],
  declarations: [PerfilclinicaDoctorPage]
})
export class PerfilclinicaDoctorPageModule {}
