import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
import { NgModule }                     from '@angular/core';

import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormDialogComponent }         from './dynamic-form-dialog.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

// Material
import {MatInputModule}                 from '@angular/material/input';
import {MatFormFieldModule}             from '@angular/material/form-field';
import {MatButtonModule}                from '@angular/material/button';
import {MatSnackBarModule}              from '@angular/material/snack-bar';
import {MatTabsModule}                  from '@angular/material/tabs';
import {MatSelectModule}                from '@angular/material/select';
import {MatRadioModule}                 from '@angular/material/radio';
import {MatDialogModule}                from '@angular/material/dialog';
import 'hammerjs';

@NgModule({
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // Material
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule
  ],
  declarations: [ 
    AppComponent, 
    DynamicFormComponent, 
    DynamicFormDialogComponent,
    DynamicFormQuestionComponent
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [DynamicFormDialogComponent]
})
export class AppModule {
  constructor() {
  }
}