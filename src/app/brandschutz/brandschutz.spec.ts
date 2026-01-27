import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brandschutz } from './brandschutz';

describe('Brandschutz', () => {
  let component: Brandschutz;
  let fixture: ComponentFixture<Brandschutz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Brandschutz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Brandschutz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
