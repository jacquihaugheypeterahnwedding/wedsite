import { Component } from '@angular/core';

import { MediaObserver } from '@angular/flex-layout';
import { I18n } from 'aws-amplify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  I18n = I18n;

  constructor(public media: MediaObserver) {

  }

}
