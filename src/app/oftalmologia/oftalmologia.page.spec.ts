import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OftalmologiaPage } from './oftalmologia.page';

describe('OftalmologiaPage', () => {
  let component: OftalmologiaPage;
  let fixture: ComponentFixture<OftalmologiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OftalmologiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OftalmologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
