import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilclinicaServiciosPage } from './perfilclinica-servicios.page';

describe('PerfilclinicaServiciosPage', () => {
  let component: PerfilclinicaServiciosPage;
  let fixture: ComponentFixture<PerfilclinicaServiciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilclinicaServiciosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilclinicaServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
