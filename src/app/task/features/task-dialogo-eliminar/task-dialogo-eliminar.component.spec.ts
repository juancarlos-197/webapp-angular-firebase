import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDialogoEliminarComponent } from './task-dialogo-eliminar.component';

describe('TaskDialogoEliminarComponent', () => {
  let component: TaskDialogoEliminarComponent;
  let fixture: ComponentFixture<TaskDialogoEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDialogoEliminarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDialogoEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
