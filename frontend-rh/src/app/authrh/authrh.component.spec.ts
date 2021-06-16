import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthrhComponent } from './authrh.component';

describe('AuthrhComponent', () => {
  let component: AuthrhComponent;
  let fixture: ComponentFixture<AuthrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthrhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
