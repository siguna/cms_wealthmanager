import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndowEditComponent } from './endow-edit.component';

describe('EndowEditComponent', () => {
  let component: EndowEditComponent;
  let fixture: ComponentFixture<EndowEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndowEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndowEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
