import { Component } from '@angular/core';
import { UserService } from '../user.service';

import { I18n } from 'aws-amplify';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  I18n = I18n;

  constructor(public userService: UserService) {

  }

  async ngOnInit() {
    

  }

}
