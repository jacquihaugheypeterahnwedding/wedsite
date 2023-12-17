import { Component } from '@angular/core';
import { APIService, Question } from '../API.service';

import { I18n } from 'aws-amplify';
import { CognitoService } from '../cognito.service';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  I18n = I18n;

  public faqList: Array<Question> = [];
  public faqListPending: Array<Question> = [];

  constructor(public api: APIService, public dialog: MatDialog) {


  }


  ngOnInit(): void {
    this.api.ListQuestions().then(value => {
      const questions = value.items as Question[];
      for(let question of questions) {
        if (question.answer) {
          this.faqList.push(question);
        } else {
          this.faqListPending.push(question);
        }
      }
    });
  }


  ask() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog);

  }


}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'ask.html',

})
export class DialogOverviewExampleDialog {
  question = new FormControl('', Validators.required);

  askQuestionForm = new FormGroup({
    question: this.question,
  });
  
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    private cognitoService: CognitoService, 
    public api: APIService
  ) {}

  close() {
    this.dialogRef.close();
  }

  submit() {
    if (this.askQuestionForm.valid) {
      this.cognitoService.getUser().then(value => {
        const username = value.username;
  
        this.api.CreateQuestion({
          username: username,
          question: this.question.value
        });
  
  
      });
      this.close();
    }
    
    
    
  }


}
