import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDialogoAgregarComponent } from './task-dialogo-agregar.component';

describe('TaskDialogoAgregarComponent', () => {
  let component: TaskDialogoAgregarComponent;
  let fixture: ComponentFixture<TaskDialogoAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDialogoAgregarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDialogoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
