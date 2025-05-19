import { Injectable } from '@angular/core';
import { Itodo } from '../model/todo';
import { Observable, Subject } from 'rxjs';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoArr: Array<Itodo> = localStorage.getItem('todoArr') ? JSON.parse(localStorage.getItem('todoArr')!) : []

  private editObj$ : Subject<Itodo> = new Subject<Itodo>()

  editObjObs : Observable<Itodo> = this.editObj$ as Observable<Itodo>

  constructor(
    private _snackbar : SnackbarService
  ) { }

  private setLocalLS(arr: Itodo[]) {
    localStorage.setItem('todoArr', JSON.stringify(this.todoArr))
  }
  fetchAllTodo() {
    return this.todoArr
  }

  sendEditedObj(todo:Itodo){
    this.editObj$.next(todo)
  }

  addTodo(todo: Itodo) {
    this.todoArr.push(todo)
    this._snackbar.opensnackbar(`todo with id ${todo.id} is Added successfully`)
    this.setLocalLS(this.todoArr)
  }

  removeTodo(todo: Itodo) {
    let index = this.todoArr.findIndex(todoObj => todoObj.id === todo.id)
    this.todoArr.splice(index, 1)
    this._snackbar.opensnackbar(`${todo.title} is removed successfully`)
    this.setLocalLS(this.todoArr)
  }

  editTodo(todo:Itodo){
    this.sendEditedObj(todo)
  }

  updateTodo(todo: Itodo) {
    let index = this.todoArr.findIndex(todoObj => todoObj.id === todo.id)
    this.todoArr[index] = todo
    this._snackbar.opensnackbar(`todo with id ${todo.id} is updated successfully`)
    this.setLocalLS(this.todoArr)
  }
}
