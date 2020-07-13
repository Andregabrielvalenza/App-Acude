import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PromosEventosPage } from './promos-eventos.page';

describe('PromosEventosPage', () => {
  let component: PromosEventosPage;
  let fixture: ComponentFixture<PromosEventosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromosEventosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PromosEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
