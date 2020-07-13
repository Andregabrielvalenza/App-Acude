import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilDoctorPageRoutingModule } from './perfil-doctor-routing.module';

import { PerfilDoctorPage } from './perfil-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilDoctorPageRoutingModule
  ],
  declarations: [PerfilDoctorPage]
})
export class PerfilDoctorPageModule {}
