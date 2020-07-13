import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroPaciente1Page } from './registro-paciente1.page';

describe('RegistroPaciente1Page', () => {
  let component: RegistroPaciente1Page;
  let fixture: ComponentFixture<RegistroPaciente1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPaciente1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPaciente1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
