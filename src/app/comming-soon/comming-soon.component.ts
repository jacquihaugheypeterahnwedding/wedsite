import { Component } from '@angular/core';

import { I18n } from 'aws-amplify';

@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.scss']
})
export class CommingSoonComponent {
  I18n = I18n;
}
