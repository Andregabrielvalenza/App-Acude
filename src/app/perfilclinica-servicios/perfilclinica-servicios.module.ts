import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilclinicaServiciosPageRoutingModule } from './perfilclinica-servicios-routing.module';

import { PerfilclinicaServiciosPage } from './perfilclinica-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilclinicaServiciosPageRoutingModule
  ],
  declarations: [PerfilclinicaServiciosPage]
})
export class PerfilclinicaServiciosPageModule {}
