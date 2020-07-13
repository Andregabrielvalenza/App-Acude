import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OftalmologiaPageRoutingModule } from './oftalmologia-routing.module';

import { OftalmologiaPage } from './oftalmologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OftalmologiaPageRoutingModule
  ],
  declarations: [OftalmologiaPage]
})
export class OftalmologiaPageModule {}
