import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncuentraProfesionalPage } from './encuentra-profesional.page';

describe('EncuentraProfesionalPage', () => {
  let component: EncuentraProfesionalPage;
  let fixture: ComponentFixture<EncuentraProfesionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuentraProfesionalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncuentraProfesionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
