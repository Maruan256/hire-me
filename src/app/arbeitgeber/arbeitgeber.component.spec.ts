import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbeitgeberComponent } from './arbeitgeber.component';

describe('ArbeitgeberComponent', () => {
  let component: ArbeitgeberComponent;
  let fixture: ComponentFixture<ArbeitgeberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArbeitgeberComponent]
    });
    fixture = TestBed.createComponent(ArbeitgeberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
