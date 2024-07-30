import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldCustomComponent } from './form-field-custom.component';

describe('FormFieldCustomComponent', () => {
  let component: FormFieldCustomComponent;
  let fixture: ComponentFixture<FormFieldCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
