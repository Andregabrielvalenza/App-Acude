import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelemedicinaPageRoutingModule } from './telemedicina-routing.module';

import { TelemedicinaPage } from './telemedicina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelemedicinaPageRoutingModule
  ],
  declarations: [TelemedicinaPage]
})
export class TelemedicinaPageModule {}
