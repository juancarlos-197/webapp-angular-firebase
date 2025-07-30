import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCursosComponent } from './task-cursos.component';

describe('TaskCursosComponent', () => {
  let component: TaskCursosComponent;
  let fixture: ComponentFixture<TaskCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
