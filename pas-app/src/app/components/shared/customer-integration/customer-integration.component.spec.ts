import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerIntegrationComponent } from './customer-integration.component';

describe('CustomerIntegrationComponent', () => {
  let component: CustomerIntegrationComponent;
  let fixture: ComponentFixture<CustomerIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
