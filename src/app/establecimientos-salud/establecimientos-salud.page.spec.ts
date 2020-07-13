import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstablecimientosSaludPage } from './establecimientos-salud.page';

describe('EstablecimientosSaludPage', () => {
  let component: EstablecimientosSaludPage;
  let fixture: ComponentFixture<EstablecimientosSaludPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablecimientosSaludPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstablecimientosSaludPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
