import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlenadoraPopup } from './llenadora-popup';

describe('LlenadoraPopup', () => {
  let component: LlenadoraPopup;
  let fixture: ComponentFixture<LlenadoraPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlenadoraPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlenadoraPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
