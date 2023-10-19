import { ApplicationRef, Component } from '@angular/core';

import { I18n } from 'aws-amplify';
import { APIService } from '../API.service';
import { UserService } from '../user.service';


import {
  FormControl,
  FormGroupDirective,
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




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  
})
export class UserComponent {

  I18n = I18n;

  text = null;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();



  constructor (private api: APIService, public userService: UserService) {
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

}
