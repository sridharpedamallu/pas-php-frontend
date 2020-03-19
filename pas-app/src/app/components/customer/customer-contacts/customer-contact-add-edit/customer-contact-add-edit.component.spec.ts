import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerContactAddEditComponent } from './customer-contact-add-edit.component';

describe('CustomerContactAddEditComponent', () => {
  let component: CustomerContactAddEditComponent;
  let fixture: ComponentFixture<CustomerContactAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerContactAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerContactAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
