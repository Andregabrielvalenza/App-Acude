import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelemedicinaPage } from './telemedicina.page';

describe('TelemedicinaPage', () => {
  let component: TelemedicinaPage;
  let fixture: ComponentFixture<TelemedicinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelemedicinaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelemedicinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
