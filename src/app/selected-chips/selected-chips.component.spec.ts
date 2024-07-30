import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedChipsComponent } from './selected-chips.component';

describe('SelectedChipsComponent', () => {
  let component: SelectedChipsComponent;
  let fixture: ComponentFixture<SelectedChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedChipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
