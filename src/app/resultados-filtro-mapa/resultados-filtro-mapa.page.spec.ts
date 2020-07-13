import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultadosFiltroMapaPage } from './resultados-filtro-mapa.page';

describe('ResultadosFiltroMapaPage', () => {
  let component: ResultadosFiltroMapaPage;
  let fixture: ComponentFixture<ResultadosFiltroMapaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosFiltroMapaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadosFiltroMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
