import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClimbsComponent } from './all-climbs.component';

describe('AllClimbsComponent', () => {
  let component: AllClimbsComponent;
  let fixture: ComponentFixture<AllClimbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllClimbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllClimbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
