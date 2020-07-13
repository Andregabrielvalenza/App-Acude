import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeallteAnuncioPage } from './deallte-anuncio.page';

describe('DeallteAnuncioPage', () => {
  let component: DeallteAnuncioPage;
  let fixture: ComponentFixture<DeallteAnuncioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeallteAnuncioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeallteAnuncioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
