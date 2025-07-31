import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignPresentacionComponent } from './sign-presentacion.component';

describe('SignPresentacionComponent', () => {
  let component: SignPresentacionComponent;
  let fixture: ComponentFixture<SignPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignPresentacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
