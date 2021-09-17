import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECcompComponent } from './eccomp.component';

describe('ECcompComponent', () => {
  let component: ECcompComponent;
  let fixture: ComponentFixture<ECcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
