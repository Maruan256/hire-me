import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieseSeiteComponent } from './diese-seite.component';

describe('DieseSeiteComponent', () => {
  let component: DieseSeiteComponent;
  let fixture: ComponentFixture<DieseSeiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DieseSeiteComponent]
    });
    fixture = TestBed.createComponent(DieseSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
