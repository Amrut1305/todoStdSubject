import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Itodo } from 'src/app/shared/model/todo';
import { TodoService } from 'src/app/shared/service/todo.service';
import { UuidService } from 'src/app/shared/service/uuid.service';
import { CustomRegex } from 'src/app/shared/validators/regex';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoForm !: FormGroup
  isInEditMode: boolean = false
  editObj !: Itodo
  constructor(
    private _uuid: UuidService,
    private _todoServe: TodoService
  ) { }

  ngOnInit(): void {
    this.createTodoForm()
    this.editModeSetup()
  }
  createTodoForm() {
    this.todoForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.pattern(CustomRegex.onlyText)]),
    })
  }

  editModeSetup() {
    this._todoServe.editObjObs.subscribe(res => {
      this.isInEditMode = true
      this.editObj = res,
        this.todoForm.patchValue(this.editObj)
    })
  }

  onSubmit() {
    if (this.todoForm.valid) {
      if (!this.isInEditMode) {
        let newTodo = {
          ...this.todoForm.value,
          id: this._uuid.generateUuid()
        }
        this.todoForm.reset()
        this._todoServe.addTodo(newTodo)
      } else {
        let updateTodo = {
          id: this.editObj.id,
          ...this.todoForm.value
        }
        this.todoForm.reset()
        this.isInEditMode = false
        this._todoServe.updateTodo(updateTodo)
      }

    }
  }

  get f(){
    return this.todoForm.controls
  }

}
