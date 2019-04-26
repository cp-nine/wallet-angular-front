import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cash2Component } from './cash2.component';

describe('Cash2Component', () => {
  let component: Cash2Component;
  let fixture: ComponentFixture<Cash2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cash2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cash2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
