import { ApplicationRef, Component } from '@angular/core';

import { I18n } from 'aws-amplify';
import { APIService } from '../API.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  I18n = I18n;

  text = null;

  language: string;


  constructor (private api: APIService, private userService: UserService) {
    this.language = this.userService.language;
  }



  ngAfterContentChecked(): void {
    this.text = I18n.get('Test String!');
    this.language = this.userService.language;
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
