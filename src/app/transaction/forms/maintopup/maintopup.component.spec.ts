import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintopupComponent } from './maintopup.component';

describe('MaintopupComponent', () => {
  let component: MaintopupComponent;
  let fixture: ComponentFixture<MaintopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
