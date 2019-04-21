import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaladdaccountComponent } from './modaladdaccount.component';

describe('ModaladdaccountComponent', () => {
  let component: ModaladdaccountComponent;
  let fixture: ComponentFixture<ModaladdaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaladdaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaladdaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
