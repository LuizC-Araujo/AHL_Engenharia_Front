import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcolaboradorComponent } from './porcolaborador.component';

describe('PorcolaboradorComponent', () => {
  let component: PorcolaboradorComponent;
  let fixture: ComponentFixture<PorcolaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcolaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcolaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
