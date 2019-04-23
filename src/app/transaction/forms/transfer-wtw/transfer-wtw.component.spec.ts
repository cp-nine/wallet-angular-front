import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferWtwComponent } from './transfer-wtw.component';

describe('TransferWtwComponent', () => {
  let component: TransferWtwComponent;
  let fixture: ComponentFixture<TransferWtwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferWtwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferWtwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
