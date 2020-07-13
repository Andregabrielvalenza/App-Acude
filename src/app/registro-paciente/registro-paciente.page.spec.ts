import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroPacientePage } from './registro-paciente.page';

describe('RegistroPacientePage', () => {
  let component: RegistroPacientePage;
  let fixture: ComponentFixture<RegistroPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPacientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
