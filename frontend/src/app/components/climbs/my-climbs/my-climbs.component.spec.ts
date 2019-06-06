import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClimbsComponent } from './my-climbs.component';

describe('MyClimbsComponent', () => {
  let component: MyClimbsComponent;
  let fixture: ComponentFixture<MyClimbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClimbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClimbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
