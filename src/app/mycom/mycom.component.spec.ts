import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomComponent } from './mycom.component';

describe('MycomComponent', () => {
  let component: MycomComponent;
  let fixture: ComponentFixture<MycomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
