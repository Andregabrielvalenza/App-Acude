import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadosFiltroMapaPageRoutingModule } from './resultados-filtro-mapa-routing.module';

import { ResultadosFiltroMapaPage } from './resultados-filtro-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadosFiltroMapaPageRoutingModule
  ],
  declarations: [ResultadosFiltroMapaPage]
})
export class ResultadosFiltroMapaPageModule {}
