import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilDoctorPage } from './perfil-doctor.page';

describe('PerfilDoctorPage', () => {
  let component: PerfilDoctorPage;
  let fixture: ComponentFixture<PerfilDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
