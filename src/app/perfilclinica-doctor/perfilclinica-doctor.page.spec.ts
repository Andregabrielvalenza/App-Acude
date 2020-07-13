import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilclinicaDoctorPage } from './perfilclinica-doctor.page';

describe('PerfilclinicaDoctorPage', () => {
  let component: PerfilclinicaDoctorPage;
  let fixture: ComponentFixture<PerfilclinicaDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilclinicaDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilclinicaDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
