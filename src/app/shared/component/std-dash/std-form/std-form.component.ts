import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Istudent } from 'src/app/shared/model/student';
import { Itodo } from 'src/app/shared/model/todo';
import { StudentService } from 'src/app/shared/service/student.service';
import { TodoService } from 'src/app/shared/service/todo.service';
import { UuidService } from 'src/app/shared/service/uuid.service';
import { CustomRegex } from 'src/app/shared/validators/regex';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  stdForm !: FormGroup
  isInEditMode: boolean = false
  editObj !: Istudent
  constructor(
    private _uuid: UuidService,
    private _stdServe: StudentService
  ) { }

  ngOnInit(): void {
    this.createStdForm()
    this.editModeSetup()
  }

  editModeSetup() {
    this._stdServe.editObjObs.subscribe(res => {
      this.isInEditMode = true
      this.editObj = res,
        this.stdForm.patchValue(this.editObj)
    })
  }

  createStdForm() {
    this.stdForm = new FormGroup({
      fname: new FormControl('', [Validators.required, Validators.pattern(CustomRegex.onlyText)]),
      lname: new FormControl('', [Validators.required, Validators.pattern(CustomRegex.onlyText)]),
      email: new FormControl('', [Validators.required, Validators.pattern(CustomRegex.email)]),
      contact: new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    if (this.stdForm.valid) {
      if (this.isInEditMode) {
        let updateTodo = {
          id: this.editObj.id,
          ...this.stdForm.value
        }
        this.isInEditMode = false
        this._stdServe.updatestd(updateTodo)

      } else {
        let newStd = {
          ...this.stdForm.value,
          id: this._uuid.generateUuid()
        }
        this._stdServe.addstd(newStd)
      }
        this.stdForm.reset()
    }
  }

  get f(){
    return this.stdForm.controls
  }



}
