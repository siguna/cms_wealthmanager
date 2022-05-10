import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndowAddComponent } from './endow-add.component';

describe('EndowAddComponent', () => {
  let component: EndowAddComponent;
  let fixture: ComponentFixture<EndowAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndowAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndowAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
