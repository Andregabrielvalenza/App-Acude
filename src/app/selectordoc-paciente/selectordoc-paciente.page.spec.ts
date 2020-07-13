import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectordocPacientePage } from './selectordoc-paciente.page';

describe('SelectordocPacientePage', () => {
  let component: SelectordocPacientePage;
  let fixture: ComponentFixture<SelectordocPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectordocPacientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectordocPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
