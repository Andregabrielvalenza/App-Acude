import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EspecialidadPage } from './especialidad.page';

describe('EspecialidadPage', () => {
  let component: EspecialidadPage;
  let fixture: ComponentFixture<EspecialidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialidadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EspecialidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
