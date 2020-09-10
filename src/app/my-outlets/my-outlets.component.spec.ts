import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOutletsComponent } from './my-outlets.component';

describe('MyOutletsComponent', () => {
  let component: MyOutletsComponent;
  let fixture: ComponentFixture<MyOutletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOutletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOutletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
