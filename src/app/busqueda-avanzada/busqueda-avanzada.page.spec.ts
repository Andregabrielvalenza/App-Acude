import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusquedaAvanzadaPage } from './busqueda-avanzada.page';

describe('BusquedaAvanzadaPage', () => {
  let component: BusquedaAvanzadaPage;
  let fixture: ComponentFixture<BusquedaAvanzadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaAvanzadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusquedaAvanzadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
