import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wallettransaction2Component } from './wallettransaction2.component';

describe('Wallettransaction2Component', () => {
  let component: Wallettransaction2Component;
  let fixture: ComponentFixture<Wallettransaction2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wallettransaction2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wallettransaction2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
