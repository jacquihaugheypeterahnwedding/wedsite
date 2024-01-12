import { Component } from '@angular/core';
import { I18n } from 'aws-amplify';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {

  I18n = I18n;

}
