import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { I18n } from 'aws-amplify';
import { APIService } from '../API.service';
import { UserService } from '../user.service';
import { CognitoService } from '../cognito.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent {

  I18n = I18n;
  rsvp_status = "Not Responded";
  has_rsvped = false;

  username;


  constructor (private api: APIService, public userService: UserService, private cognitoService: CognitoService) {

  }

  ngOnInit() {

    this.cognitoService.getUser().then(value => {
      const username = value.username;
      this.username = username;
      console.log(username);

      this.api.GetRSVP(username).then(value => {
        console.log(value);
        if (value != null) {
          this.rsvp_status = value.coming;
          this.has_rsvped = true;
        }
      });

    });
    
    
  }

  sendRsvp(message: string) {
    console.log(message)
    if (this.has_rsvped) {
      this.api.UpdateRSVP({
        coming: message,
        id: this.username
      });
    } else {
      
        this.api.CreateRSVP({
          username: this.username,
          coming: message,
          id: this.username,
          info: this.userService.userInfo.family
        });

      
    }
  }


}
