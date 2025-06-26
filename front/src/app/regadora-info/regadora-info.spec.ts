import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegadoraInfo } from './regadora-info';

describe('RegadoraInfo', () => {
  let component: RegadoraInfo;
  let fixture: ComponentFixture<RegadoraInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegadoraInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegadoraInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
