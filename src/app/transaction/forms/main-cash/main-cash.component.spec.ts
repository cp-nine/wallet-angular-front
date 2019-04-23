import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCashComponent } from './main-cash.component';

describe('MainCashComponent', () => {
  let component: MainCashComponent;
  let fixture: ComponentFixture<MainCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
