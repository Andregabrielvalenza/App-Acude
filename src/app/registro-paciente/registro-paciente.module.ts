import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPacientePageRoutingModule } from './registro-paciente-routing.module';

import { RegistroPacientePage } from './registro-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPacientePageRoutingModule
  ],
  declarations: [RegistroPacientePage]
})
export class RegistroPacientePageModule {}
