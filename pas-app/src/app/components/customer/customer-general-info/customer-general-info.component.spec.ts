import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGeneralInfoComponent } from './customer-general-info.component';

describe('CustomerGeneralInfoComponent', () => {
  let component: CustomerGeneralInfoComponent;
  let fixture: ComponentFixture<CustomerGeneralInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerGeneralInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
