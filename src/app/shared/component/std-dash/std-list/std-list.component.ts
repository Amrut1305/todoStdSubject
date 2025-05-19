import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Istudent } from 'src/app/shared/model/student';
import { StudentService } from 'src/app/shared/service/student.service';
import { RemoveComponent } from '../../remove/remove.component';

@Component({
  selector: 'app-std-list',
  templateUrl: './std-list.component.html',
  styleUrls: ['./std-list.component.scss']
})
export class StdListComponent implements OnInit {
  stdData !: Array<Istudent>
  constructor(
    private _stdServe: StudentService,
    private _MatDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchStudents()
  }

  fetchStudents() {
    this.stdData = this._stdServe.fetchAllStudents()
  }

  onRemove(std: Istudent) {
    let res = this._MatDialog.open(RemoveComponent)
    res.afterClosed().subscribe(res => {
      if (res) {
        this._stdServe.removestd(std)
      }
    })
  }

  onEdit(std: Istudent) {
    this._stdServe.editstd(std)
  }

}
