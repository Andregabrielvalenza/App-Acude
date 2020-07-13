import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstablecimientosSaludPageRoutingModule } from './establecimientos-salud-routing.module';

import { EstablecimientosSaludPage } from './establecimientos-salud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstablecimientosSaludPageRoutingModule
  ],
  declarations: [EstablecimientosSaludPage]
})
export class EstablecimientosSaludPageModule {}
