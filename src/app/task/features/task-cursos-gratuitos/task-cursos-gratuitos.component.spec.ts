import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCursosGratuitosComponent } from './task-cursos-gratuitos.component';

describe('TaskCursosGratuitosComponent', () => {
  let component: TaskCursosGratuitosComponent;
  let fixture: ComponentFixture<TaskCursosGratuitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCursosGratuitosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCursosGratuitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
