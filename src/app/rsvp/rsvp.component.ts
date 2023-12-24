import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { I18n } from 'aws-amplify';
import { APIService } from '../API.service';
import { UserService } from '../user.service';
import { CognitoService } from '../cognito.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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


  constructor (private api: APIService, private _snackBar: MatSnackBar, public userService: UserService, private cognitoService: CognitoService) {

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
    this._snackBar.open('RSVP Submitted!', 'OK');
    if (this.has_rsvped) {
      this.api.UpdateRSVP({
        coming: message,
        id: this.username
      }).then(() => {
        this.ngOnInit();
      });
    } else {
      
        this.api.CreateRSVP({
          username: this.username,
          coming: message,
          id: this.username
        }).then(() => {
          this.ngOnInit();
        });

      
    }
  }


}
