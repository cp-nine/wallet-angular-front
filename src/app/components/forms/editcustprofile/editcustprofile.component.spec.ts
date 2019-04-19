import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcustprofileComponent } from './editcustprofile.component';

describe('EditcustprofileComponent', () => {
  let component: EditcustprofileComponent;
  let fixture: ComponentFixture<EditcustprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcustprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcustprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
