import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { I18n } from 'aws-amplify';
import { APIService } from '../API.service';
import { UserService } from '../user.service';
import { CognitoService } from '../cognito.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-rsvp-yes',
  templateUrl: './rsvp-yes.component.html',
  styleUrls: ['./rsvp-yes.component.scss']
})
export class RsvpYesComponent {
  I18n = I18n;


  /*

  each family member:
  name: str
  child: bool
  age: number or multiselect?
  diet: string




  overall commetns

  */


  adults = [];
  children = [];

  username;


  comment = '';





  constructor (private api: APIService, public dialog: MatDialog, public router: Router, public userService: UserService, private cognitoService: CognitoService, private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.userService.user_info_obs.subscribe(values => {
      const userid = this.userService.userInfo.id;
      const username = this.userService.userInfo.username;
      this.username = username;

      this.api.GetRSVP(username).then(value => {
        if (value != null) {
          this.api.GetRSVP(username).then(value => {
            if (value.info == null) {
              this.api.GetUser(userid).then(user => {
                const fam = JSON.parse(user.family).people;
                this.setFamily(fam);
              });
            } else {
              const fam = JSON.parse(value.info).people;
              this.setFamily(fam);
            }
            

          });
        } else {
          this.api.GetUser(userid).then(user => {
            const fam = JSON.parse(user.family).people;
            this.setFamily(fam);
          });
        }
      });

      
    });

    this.dialog.open(DialogAnimationsExampleDialog, {
      
    });

    
  }

  setFamily(fam) {
    for (let person of fam) {

         
      if (person.child) {
        this.children.push(person);
      } else {
        this.adults.push(person);
      }
    }
  }

  clear() {

  }


  submit() {
    const people = this.children.concat(this.adults);

    this.api.UpdateRSVP({
      id: this.username,
      info: JSON.stringify({people: people, comment: this.comment})
    }).then(()=> {
      this._snackBar.open('RSVP Submitted!', 'OK');
      this.router.navigate(['rsvp']);
      

    });

    
  }


  addAdult() {
    this.adults.push({});
  }

  addChild() {
    this.children.push({
      child: true
    });
  }









  remove(person, child) {
    if (child) {
      const ind = this.children.indexOf(person);
      this.children.splice(ind, 1); 
    } else {
      
      const ind = this.adults.indexOf(person);
      this.adults.splice(ind, 1);
    }

  }

}


@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}