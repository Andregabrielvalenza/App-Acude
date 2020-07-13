import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergenciaPageRoutingModule } from './emergencia-routing.module';

import { EmergenciaPage } from './emergencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmergenciaPageRoutingModule
  ],
  declarations: [EmergenciaPage]
})
export class EmergenciaPageModule {}
