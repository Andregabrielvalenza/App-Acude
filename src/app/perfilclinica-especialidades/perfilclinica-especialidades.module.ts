import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilclinicaEspecialidadesPageRoutingModule } from './perfilclinica-especialidades-routing.module';

import { PerfilclinicaEspecialidadesPage } from './perfilclinica-especialidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilclinicaEspecialidadesPageRoutingModule
  ],
  declarations: [PerfilclinicaEspecialidadesPage]
})
export class PerfilclinicaEspecialidadesPageModule {}
