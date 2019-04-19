import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsreportComponent } from './transactionsreport.component';

describe('TransactionsreportComponent', () => {
  let component: TransactionsreportComponent;
  let fixture: ComponentFixture<TransactionsreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
