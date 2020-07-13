import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establecimientos-salud',
  templateUrl: './establecimientos-salud.page.html',
  styleUrls: ['./establecimientos-salud.page.scss'],
})
export class EstablecimientosSaludPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 3,
    spaceBetween: 10,
  };

}
