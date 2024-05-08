import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipglossComponent } from './lipgloss.component';

describe('LipglossComponent', () => {
  let component: LipglossComponent;
  let fixture: ComponentFixture<LipglossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LipglossComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LipglossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
