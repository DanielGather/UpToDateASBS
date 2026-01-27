import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arbeitsschutz } from './arbeitsschutz';

describe('Arbeitsschutz', () => {
  let component: Arbeitsschutz;
  let fixture: ComponentFixture<Arbeitsschutz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arbeitsschutz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arbeitsschutz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
