import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoSvg } from './plano-svg';

describe('PlanoSvg', () => {
  let component: PlanoSvg;
  let fixture: ComponentFixture<PlanoSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanoSvg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoSvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
