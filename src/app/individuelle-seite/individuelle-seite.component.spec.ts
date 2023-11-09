import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuelleSeiteComponent } from './individuelle-seite.component';

describe('IndividuelleSeiteComponent', () => {
  let component: IndividuelleSeiteComponent;
  let fixture: ComponentFixture<IndividuelleSeiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividuelleSeiteComponent]
    });
    fixture = TestBed.createComponent(IndividuelleSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
