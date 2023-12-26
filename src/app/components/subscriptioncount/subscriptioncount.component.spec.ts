import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptioncountComponent } from './subscriptioncount.component';

describe('SubscriptioncountComponent', () => {
  let component: SubscriptioncountComponent;
  let fixture: ComponentFixture<SubscriptioncountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SubscriptioncountComponent]
    });
    fixture = TestBed.createComponent(SubscriptioncountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
