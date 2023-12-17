import { ApplicationRef, Component } from '@angular/core';

import { I18n } from 'aws-amplify';
import { APIService } from '../API.service';
import { UserService } from '../user.service';

import { Auth } from 'aws-amplify';


import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}




export function checkMatchValidator(field1: string, field2: string) {
  return function (frm) {
    let field1Value = frm.get(field1).value;
    let field2Value = frm.get(field2).value;

    if (field1Value !== field2Value) {
      return { 'match': `value ${field1Value} is not equal to ${field2Value}` }
    }
    return null;
  }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  
})
export class UserComponent {

  I18n = I18n;

  text = null;
  changeLoading = false;
  retError = null;
  succChange = false;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  oldPwd = new FormControl('', Validators.required);
  newPwd = new FormControl('', [Validators.required, Validators.minLength(6)]);
  confirmPwd = new FormControl('', Validators.required);


  changePasswordForm = new FormGroup({
    oldPwd: this.oldPwd,
    newPwd: this.newPwd,
    confirmPwd: this.confirmPwd,
  }, {
    validators: checkMatchValidator('newPwd', 'confirmPwd')
  }
  );



  constructor (private api: APIService, public userService: UserService, fb: FormBuilder) {

  }




  changeLanguage(event: any): void {
    let lan = 'en-US';
    if (event.value === 'ko-KR') {
      lan = 'ko-KR';
    }
    I18n.setLanguage(lan);
    this.api.UpdateUserSettings({'id': this.userService.userSettings.id as string, 'language': lan});
  }

  

  switchLanguage() {
    console.log('switch')
    I18n.setLanguage('ko-KR');

  }

  changePassword()
  {
    const th = this;
    this.changeLoading = true;
    this.retError = null;
    this.succChange = false;
    Auth.currentAuthenticatedUser().then(user => {
      console.log(this.changePasswordForm);
      Auth.changePassword(user, this.oldPwd.value as unknown as string, this.newPwd.value as unknown as string).then(success => {
        console.log(success);
        th.changeLoading = false;
        th.succChange = true;
      }, error => {
        console.log(error);
        console.log(error.message);
        th.changeLoading = false;
        th.retError = error.message;
      });
    });
    
  }
}
