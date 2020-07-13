import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promos-eventos',
  templateUrl: './promos-eventos.page.html',
  styleUrls: ['./promos-eventos.page.scss'],
})
export class PromosEventosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 3,
    spaceBetween: 10,
  };

}
