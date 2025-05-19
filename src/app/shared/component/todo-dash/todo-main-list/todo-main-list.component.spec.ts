import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMainListComponent } from './todo-main-list.component';

describe('TodoMainListComponent', () => {
  let component: TodoMainListComponent;
  let fixture: ComponentFixture<TodoMainListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoMainListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoMainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
