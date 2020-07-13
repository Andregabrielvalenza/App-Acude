import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeallteAnuncioPageRoutingModule } from './deallte-anuncio-routing.module';

import { DeallteAnuncioPage } from './deallte-anuncio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeallteAnuncioPageRoutingModule
  ],
  declarations: [DeallteAnuncioPage]
})
export class DeallteAnuncioPageModule {}
