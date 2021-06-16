import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorsetorComponent } from './porsetor.component';

describe('PorsetorComponent', () => {
  let component: PorsetorComponent;
  let fixture: ComponentFixture<PorsetorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorsetorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorsetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
