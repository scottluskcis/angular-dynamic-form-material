import { Component }              from '@angular/core';

import { QuestionService }        from './question.service';
import { DynamicFormDialogComponent }   from './dynamic-form-dialog.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];

  constructor(service: QuestionService, public dialog: MatDialog) {
    this.questions = service.getQuestions();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DynamicFormDialogComponent, {
      width: '450px',
      data: {questions: this.questions}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }
}