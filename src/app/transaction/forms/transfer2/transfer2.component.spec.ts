import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Transfer2Component } from './transfer2.component';

describe('Transfer2Component', () => {
  let component: Transfer2Component;
  let fixture: ComponentFixture<Transfer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transfer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transfer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
