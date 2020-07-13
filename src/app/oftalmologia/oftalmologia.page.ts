import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oftalmologia',
  templateUrl: './oftalmologia.page.html',
  styleUrls: ['./oftalmologia.page.scss'],
})
export class OftalmologiaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 3,
    spaceBetween: 10,
  };

}
