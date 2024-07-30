import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextArComponent } from './text-ar.component';

describe('TextArComponent', () => {
  let component: TextArComponent;
  let fixture: ComponentFixture<TextArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextArComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
