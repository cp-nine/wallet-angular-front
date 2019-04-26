import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topup2Component } from './topup2.component';

describe('Topup2Component', () => {
  let component: Topup2Component;
  let fixture: ComponentFixture<Topup2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topup2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
