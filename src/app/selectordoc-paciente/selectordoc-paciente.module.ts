import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectordocPacientePageRoutingModule } from './selectordoc-paciente-routing.module';

import { SelectordocPacientePage } from './selectordoc-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectordocPacientePageRoutingModule
  ],
  declarations: [SelectordocPacientePage]
})
export class SelectordocPacientePageModule {}
