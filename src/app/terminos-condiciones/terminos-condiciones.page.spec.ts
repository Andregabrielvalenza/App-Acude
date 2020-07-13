import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TerminosCondicionesPage } from './terminos-condiciones.page';

describe('TerminosCondicionesPage', () => {
  let component: TerminosCondicionesPage;
  let fixture: ComponentFixture<TerminosCondicionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminosCondicionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TerminosCondicionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
