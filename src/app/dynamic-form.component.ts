import { Component, Input, OnInit, Output, EventEmitter }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  @Input() isDialog: boolean;

  @Output() close = new EventEmitter<any>();
  @Output() submit = new EventEmitter<any>();

  form: FormGroup;
  payLoad = '';

  constructor(
    private qcs: QuestionControlService,
    private _snackBar: MatSnackBar) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this._snackBar.open(`Saved Successfully`, '', {
      duration: 2000,
      panelClass: 'snackbar-success',
      verticalPosition: 'top',
      horizontalPosition: 'right'
    }).afterOpened().subscribe(() => {
      this.submit.emit(this.form.value);
      this.payLoad = JSON.stringify(this.form.value);
      console.log('Saved the following values', this.payLoad);
    });
  }

  onCancel() {
    this.close.emit(null);
  }
}