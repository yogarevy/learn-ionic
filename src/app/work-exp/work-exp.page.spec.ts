import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkExpPage } from './work-exp.page';

describe('WorkExpPage', () => {
  let component: WorkExpPage;
  let fixture: ComponentFixture<WorkExpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkExpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
