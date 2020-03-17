import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortofolioPage } from './portofolio.page';

describe('PortofolioPage', () => {
  let component: PortofolioPage;
  let fixture: ComponentFixture<PortofolioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortofolioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortofolioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
