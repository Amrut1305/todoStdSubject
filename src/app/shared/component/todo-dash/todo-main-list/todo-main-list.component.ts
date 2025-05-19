import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Itodo } from 'src/app/shared/model/todo';
import { TodoService } from 'src/app/shared/service/todo.service';
import { RemoveComponent } from '../../remove/remove.component';

@Component({
  selector: 'app-todo-main-list',
  templateUrl: './todo-main-list.component.html',
  styleUrls: ['./todo-main-list.component.scss']
})
export class TodoMainListComponent implements OnInit {
  todoData !: Array<Itodo>
  constructor(
    private _todoServe: TodoService,
    private _MatDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchTodos()
  }

  fetchTodos() {
    this.todoData = this._todoServe.fetchAllTodo()
  }

  onRemove(todo: Itodo) {
    let res = this._MatDialog.open(RemoveComponent)
    res.afterClosed().subscribe(res=>{
    if (res) {
      this._todoServe.removeTodo(todo)
    }
    })
    
  }

  onEdit(todo: Itodo) {
    this._todoServe.editTodo(todo)
  }
}
