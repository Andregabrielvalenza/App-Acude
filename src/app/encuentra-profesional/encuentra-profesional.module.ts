import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuentraProfesionalPageRoutingModule } from './encuentra-profesional-routing.module';

import { EncuentraProfesionalPage } from './encuentra-profesional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuentraProfesionalPageRoutingModule
  ],
  declarations: [EncuentraProfesionalPage]
})
export class EncuentraProfesionalPageModule {}
