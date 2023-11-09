import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckblattComponent } from './deckblatt.component';

describe('DeckblattComponent', () => {
  let component: DeckblattComponent;
  let fixture: ComponentFixture<DeckblattComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeckblattComponent]
    });
    fixture = TestBed.createComponent(DeckblattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
