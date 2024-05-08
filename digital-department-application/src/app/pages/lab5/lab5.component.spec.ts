import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab5Component } from './lab5.component';

describe('Lab5Component', () => {
  let component: Lab5Component;
  let fixture: ComponentFixture<Lab5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lab5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
