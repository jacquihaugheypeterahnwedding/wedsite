import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { I18n } from 'aws-amplify';


@Component({
  selector: 'app-rsvp-yes',
  templateUrl: './rsvp-yes.component.html',
  styleUrls: ['./rsvp-yes.component.scss']
})
export class RsvpYesComponent {
  I18n = I18n;


  confirmPwd = new FormControl('', Validators.required);


  detailsComing = new FormGroup({
    confirmPwd: this.confirmPwd,
  });

}
