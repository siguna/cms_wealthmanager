import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndowListComponent } from './endow-list.component';

describe('EndowListComponent', () => {
  let component: EndowListComponent;
  let fixture: ComponentFixture<EndowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
