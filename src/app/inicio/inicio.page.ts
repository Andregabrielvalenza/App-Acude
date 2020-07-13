import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 2.5,
    spaceBetween: 20,
  };

}
