import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaEstableciminetoPageRoutingModule } from './mapa-establecimineto-routing.module';

import { MapaEstableciminetoPage } from './mapa-establecimineto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaEstableciminetoPageRoutingModule
  ],
  declarations: [MapaEstableciminetoPage]
})
export class MapaEstableciminetoPageModule {}
