import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencylistComponent } from './currencylist.component';

describe('CurrencylistComponent', () => {
  let component: CurrencylistComponent;
  let fixture: ComponentFixture<CurrencylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CurrencylistComponent]
    });
    fixture = TestBed.createComponent(CurrencylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
