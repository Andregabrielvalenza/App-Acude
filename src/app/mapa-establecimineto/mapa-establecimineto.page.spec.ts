import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaEstableciminetoPage } from './mapa-establecimineto.page';

describe('MapaEstableciminetoPage', () => {
  let component: MapaEstableciminetoPage;
  let fixture: ComponentFixture<MapaEstableciminetoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaEstableciminetoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaEstableciminetoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
