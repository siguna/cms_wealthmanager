import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndowManagementComponent } from './endow-management.component';

describe('EndowManagementComponent', () => {
  let component: EndowManagementComponent;
  let fixture: ComponentFixture<EndowManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndowManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndowManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
