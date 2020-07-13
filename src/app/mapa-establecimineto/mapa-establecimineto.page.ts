import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-establecimineto',
  templateUrl: './mapa-establecimineto.page.html',
  styleUrls: ['./mapa-establecimineto.page.scss'],
})
export class MapaEstableciminetoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 4,
    spaceBetween: 8,
  };

}
