import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupByaccountComponent } from './topup-byaccount.component';

describe('TopupByaccountComponent', () => {
  let component: TopupByaccountComponent;
  let fixture: ComponentFixture<TopupByaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupByaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupByaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
