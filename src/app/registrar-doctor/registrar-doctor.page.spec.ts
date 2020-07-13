import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrarDoctorPage } from './registrar-doctor.page';

describe('RegistrarDoctorPage', () => {
  let component: RegistrarDoctorPage;
  let fixture: ComponentFixture<RegistrarDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
