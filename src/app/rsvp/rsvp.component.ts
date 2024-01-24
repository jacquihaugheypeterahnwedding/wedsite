import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { I18n } from 'aws-amplify';
import { APIService, CreateLoginInput } from '../API.service';
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

  username = '';


  constructor (private api: APIService, private _snackBar: MatSnackBar, public userService: UserService, private cognitoService: CognitoService) {

  }



  ngOnInit() {
    this.userService.user_obs.subscribe(values => {
      this.username = this.userService.username;
      console.log(this.username);

      this.api.GetRSVP(this.username).then(value => {
        console.log(value);
        if (value != null) {
          this.rsvp_status = value.coming;
          this.has_rsvped = true;
        }
      });

      const login: CreateLoginInput = {
        username: this.username + " rsvp",
        login: (new Date()).toString()
      }

      this.api.CreateLogin(login);
    });
    
    
    
  }

  sendRsvp(message: string) {
    this._snackBar.open('RSVP Submitted!', 'OK');
    if (this.has_rsvped) {
      console.log('update');
      console.log(this.username)
      this.api.UpdateRSVP({
        coming: message,
        time: (new Date()).toString(),
        id: this.username
      }).then(() => {
        //this.ngOnInit();
      });
    } else {
      console.log('create');
      console.log(this.username)
        this.api.CreateRSVP({
          username: this.username,
          coming: message,
          time: (new Date()).toString(),
          id: this.username
        }).then(() => {
          //this.ngOnInit();
          //show RSVP has been recieved?
        });

      
    }
  }


}
