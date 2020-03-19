import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerClassificationComponent } from './customer-classification.component';

describe('CustomerClassificationComponent', () => {
  let component: CustomerClassificationComponent;
  let fixture: ComponentFixture<CustomerClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
