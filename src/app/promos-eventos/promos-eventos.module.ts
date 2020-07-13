import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromosEventosPageRoutingModule } from './promos-eventos-routing.module';

import { PromosEventosPage } from './promos-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromosEventosPageRoutingModule
  ],
  declarations: [PromosEventosPage]
})
export class PromosEventosPageModule {}
