import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deallte-anuncio',
  templateUrl: './deallte-anuncio.page.html',
  styleUrls: ['./deallte-anuncio.page.scss'],
})
export class DeallteAnuncioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 3,
    spaceBetween: 10,
  };

}
