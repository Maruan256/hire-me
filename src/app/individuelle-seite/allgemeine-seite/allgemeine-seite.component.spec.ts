import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllgemeineSeiteComponent } from './allgemeine-seite.component';

describe('AllgemeineSeiteComponent', () => {
  let component: AllgemeineSeiteComponent;
  let fixture: ComponentFixture<AllgemeineSeiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllgemeineSeiteComponent]
    });
    fixture = TestBed.createComponent(AllgemeineSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
