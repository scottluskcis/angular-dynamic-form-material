import { Component, Input, OnInit, Inject }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';

import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-form-dialog',
  templateUrl: './dynamic-form-dialog.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormDialogComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];

  constructor(
    private qcs: QuestionControlService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DynamicFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {  
      this.questions = this.data.questions;
    }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}

export interface DialogData {
  questions: QuestionBase<any>[]
}