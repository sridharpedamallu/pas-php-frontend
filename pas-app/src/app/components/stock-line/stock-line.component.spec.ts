import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLineComponent } from './stock-line.component';

describe('StockLineComponent', () => {
  let component: StockLineComponent;
  let fixture: ComponentFixture<StockLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
