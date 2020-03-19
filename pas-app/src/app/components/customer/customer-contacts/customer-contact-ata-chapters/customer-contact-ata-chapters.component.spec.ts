import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerContactAtaChaptersComponent } from './customer-contact-ata-chapters.component';

describe('CustomerContactAtaChaptersComponent', () => {
  let component: CustomerContactAtaChaptersComponent;
  let fixture: ComponentFixture<CustomerContactAtaChaptersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerContactAtaChaptersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerContactAtaChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
