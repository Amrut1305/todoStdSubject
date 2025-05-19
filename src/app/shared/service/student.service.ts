import { Injectable } from '@angular/core';
import { Istudent } from '../model/student';
import { Observable, Subject } from 'rxjs';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  stdArr: Array<Istudent> = localStorage.getItem('stdArr') ? JSON.parse(localStorage.getItem('stdArr')!) : []

  private editObj$: Subject<Istudent> = new Subject<Istudent>()

  editObjObs: Observable<Istudent> = this.editObj$ as Observable<Istudent>

  constructor(
    private _snackbar: SnackbarService
  ) { }

  private setLocalLS(arr: Istudent[]) {
    localStorage.setItem('stdArr', JSON.stringify(this.stdArr))
  }
  fetchAllStudents():Array<Istudent> {
    return this.stdArr
  }

  sendEditedObj(std: Istudent) {
    this.editObj$.next(std)
  }

  addstd(std: Istudent) {
    this.stdArr.push(std)
    this._snackbar.opensnackbar(`std with id ${std.id} is Added successfully`)
    this.setLocalLS(this.stdArr)
  }

   removestd(std: Istudent) {
      let index = this.stdArr.findIndex(stdObj => stdObj.id === std.id)
      this.stdArr.splice(index, 1)
      this._snackbar.opensnackbar(`${std.fname} is removed successfully`)
      this.setLocalLS(this.stdArr)
    }
  
    editstd(std:Istudent){
      this.sendEditedObj(std)
    }
  
    updatestd(std: Istudent) {
      let index = this.stdArr.findIndex(stdObj => stdObj.id === std.id)
      this.stdArr[index] = std
      this._snackbar.opensnackbar(`std with id ${std.id} is updated successfully`)
      this.setLocalLS(this.stdArr)
    }


}
