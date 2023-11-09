import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbeitenComponent } from './arbeiten.component';

describe('ArbeitenComponent', () => {
  let component: ArbeitenComponent;
  let fixture: ComponentFixture<ArbeitenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArbeitenComponent]
    });
    fixture = TestBed.createComponent(ArbeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
