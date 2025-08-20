import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDialogoEditarComponent } from './task-dialogo-editar.component';

describe('TaskDialogoEditarComponent', () => {
  let component: TaskDialogoEditarComponent;
  let fixture: ComponentFixture<TaskDialogoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDialogoEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDialogoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
