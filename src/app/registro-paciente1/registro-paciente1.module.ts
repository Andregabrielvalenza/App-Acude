import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPaciente1PageRoutingModule } from './registro-paciente1-routing.module';

import { RegistroPaciente1Page } from './registro-paciente1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPaciente1PageRoutingModule
  ],
  declarations: [RegistroPaciente1Page]
})
export class RegistroPaciente1PageModule {}
