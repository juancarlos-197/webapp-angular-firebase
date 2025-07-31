import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignPresentarComponent } from './sign-presentar.component';

describe('SignPresentarComponent', () => {
  let component: SignPresentarComponent;
  let fixture: ComponentFixture<SignPresentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignPresentarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignPresentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
