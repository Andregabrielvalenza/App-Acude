import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedaAvanzadaPageRoutingModule } from './busqueda-avanzada-routing.module';

import { BusquedaAvanzadaPage } from './busqueda-avanzada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedaAvanzadaPageRoutingModule
  ],
  declarations: [BusquedaAvanzadaPage]
})
export class BusquedaAvanzadaPageModule {}
