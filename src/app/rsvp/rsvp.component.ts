import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { I18n } from 'aws-amplify';
import { APIService, CreateLoginInput, Event } from '../API.service';
import { UserService } from '../user.service';
import { CognitoService } from '../cognito.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';


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


  constructor (private api: APIService, private _snackBar: MatSnackBar, public userService: UserService, private cognitoService: CognitoService, public dialog: MatDialog) {

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(RSVPDialog);
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
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



}





@Component({
  selector: 'rsvp-dialog',
  styleUrls: ['./rsvp.component.scss'],
  templateUrl: 'dialog.html',

})
export class RSVPDialog {
  I18n = I18n;
  adults = [];
  children = [];

  username = 'unrecieved';
  has_rsvped = false;
  rsvp_status = "Not Responded";
  sent_regrets = false;
  public events: Array<Event> = [];

  comment = '';

  attending = 'Coming';

  event_rsvp = {};

  @ViewChild('stepper') stepper: MatStepper;


  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  
  constructor(
    public dialogRef: MatDialogRef<RSVPDialog>,
    private cognitoService: CognitoService, 
    public api: APIService,
    public userService: UserService,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.userService.user_info_obs.subscribe(values => {
      const userid = this.userService.userInfo.id;
      this.username = this.userService.username;
      this.events = [];
      this.adults = [];
      this.children = [];

      this.api.GetRSVP(this.username).then(value => {
        if (value != null) {
          this.has_rsvped = true;
          this.rsvp_status = value.coming;
            if (value.info == null) {
              this.api.GetUser(userid).then(user => {
                const fam = JSON.parse(user.family).people;
                this.setFamily(fam);
              });
            } else {
              const fam = JSON.parse(value.info).people;
              this.setFamily(fam);
              this.comment = JSON.parse(value.info).comment;
              this.event_rsvp = JSON.parse(value.info).events;

              
            }
            
        } else {
          this.api.GetUser(userid).then(user => {
            const fam = JSON.parse(user.family).people;
            this.setFamily(fam);
          });
        }
      });

      this.api.ListEvents().then(value => {
        const events = value.items as Event[];
        for (let ind in events) {
          let event = events[ind];
          let event_added = false;
          // TODO - if there are no event groups
          let event_groups: string[] = [];
          if (event.groups) {
            event_groups = event.groups?.split(',');
          }
          
          if (event_groups?.includes('all')) {
            this.events.push(event);
          } else {
            for (let g in event_groups) {
              const group = event_groups[g];
              let user_groups: string[] = [];
              if (this.userService.userInfo.groups) {
                user_groups = this.userService.userInfo.groups?.split(',');
              }
              for (let user_group_ind in user_groups) {
                const user_group = user_groups[user_group_ind];
  
                if (user_group === group && !event_added) {
                  this.events.push(event);
                  event_added = true;
                }
              }
            }
          }
  
        }

        for (let e in events) {
          const event = events[e];

          if (!(event.name in this.event_rsvp)) {
            if (event.name == 'Wedding') {
              this.event_rsvp[event.name] = true;
            } else {
              //this.event_rsvp[event.name] = false;
            }
          }
          
          
          
        }

        
      });
    });
  }

  send_coming() {
    this.attending = 'Coming';
    this.sendRsvp('Coming')
    setTimeout(() => {
      this.stepper.selectedIndex = 1;
    }, 1);
  }

  send_regret() {
    this.attending = 'Regrets';
    setTimeout(() => {
      this.stepper.selectedIndex = 1;
    this.stepper.selectedIndex = 2;
    this.stepper.selectedIndex = 3;
    }, 1);
    
    this.sendRsvp('Regrets');

      
  }

  addAdult() {
    this.adults.push({});
  }

  addChild() {
    this.children.push({
      child: true
    });
  }

  sendRsvp(message: string) {
    this.sent_regrets = true;
    if (this.has_rsvped) {
      this.api.UpdateRSVP({
        coming: message,
        time: (new Date()).toString(),
        id: this.username
      }).then(() => {

        
      });
    } else {
        this.api.CreateRSVP({
          username: this.username,
          coming: message,
          time: (new Date()).toString(),
          id: this.username
        }).then(() => {

        });

      
    }
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

  close() {
    this.dialogRef.close();
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

  submit() {
    //this.sendRsvp('Coming')
    const people = this.children.concat(this.adults);

    const info = JSON.stringify({people: people, comment: this.comment, events: this.event_rsvp});
    console.log(info);

    if (this.has_rsvped) {
      this.api.UpdateRSVP({
        id: this.username,
        time: (new Date()).toString(),
        info: info
      }).then(()=> {
        
          this._snackBar.open(I18n.get('RSVP Received'), I18n.get('OK'));
      });
    } else {
      this.api.CreateRSVP({
        id: this.username,
        time: (new Date()).toString(),
        coming: 'Coming',
        info: info
      }).then(()=> {
        
          this._snackBar.open(I18n.get('RSVP Received'), I18n.get('OK'));
      });
    }

    
    
    
  }


}
