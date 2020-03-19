import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerContactViewComponent } from './customer-contact-view.component';

describe('CustomerContactViewComponent', () => {
  let component: CustomerContactViewComponent;
  let fixture: ComponentFixture<CustomerContactViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerContactViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerContactViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
