import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNosotrosComponent } from './task-nosotros.component';

describe('TaskNosotrosComponent', () => {
  let component: TaskNosotrosComponent;
  let fixture: ComponentFixture<TaskNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskNosotrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
