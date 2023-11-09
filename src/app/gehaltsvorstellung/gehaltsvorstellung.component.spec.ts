import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GehaltsvorstellungComponent } from './gehaltsvorstellung.component';

describe('GehaltsvorstellungComponent', () => {
  let component: GehaltsvorstellungComponent;
  let fixture: ComponentFixture<GehaltsvorstellungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GehaltsvorstellungComponent]
    });
    fixture = TestBed.createComponent(GehaltsvorstellungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
