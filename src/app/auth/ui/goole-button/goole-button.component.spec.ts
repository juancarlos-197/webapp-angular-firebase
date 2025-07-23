import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooleButtonComponent } from './goole-button.component';

describe('GooleButtonComponent', () => {
  let component: GooleButtonComponent;
  let fixture: ComponentFixture<GooleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GooleButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GooleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
