import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignMensajesContactoComponent } from './sign-mensajes-contacto.component';

describe('SignMensajesContactoComponent', () => {
  let component: SignMensajesContactoComponent;
  let fixture: ComponentFixture<SignMensajesContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignMensajesContactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignMensajesContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
