import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilclinicaEspecialidadesPage } from './perfilclinica-especialidades.page';

describe('PerfilclinicaEspecialidadesPage', () => {
  let component: PerfilclinicaEspecialidadesPage;
  let fixture: ComponentFixture<PerfilclinicaEspecialidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilclinicaEspecialidadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilclinicaEspecialidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
