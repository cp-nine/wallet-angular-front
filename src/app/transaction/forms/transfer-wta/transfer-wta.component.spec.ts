import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferWtaComponent } from './transfer-wta.component';

describe('TransferWtaComponent', () => {
  let component: TransferWtaComponent;
  let fixture: ComponentFixture<TransferWtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferWtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferWtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
