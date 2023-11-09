import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnschreibenComponent } from './anschreiben.component';

describe('AnschreibenComponent', () => {
  let component: AnschreibenComponent;
  let fixture: ComponentFixture<AnschreibenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnschreibenComponent]
    });
    fixture = TestBed.createComponent(AnschreibenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
