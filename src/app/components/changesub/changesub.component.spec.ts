import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesubComponent } from './changesub.component';

describe('ChangesubComponent', () => {
  let component: ChangesubComponent;
  let fixture: ComponentFixture<ChangesubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChangesubComponent]
    });
    fixture = TestBed.createComponent(ChangesubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
