import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeallteAnuncioPage } from './deallte-anuncio.page';

const routes: Routes = [
  {
    path: '',
    component: DeallteAnuncioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeallteAnuncioPageRoutingModule {}
