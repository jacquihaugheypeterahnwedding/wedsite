import { Component } from '@angular/core';
import { I18n } from 'aws-amplify';
import { APIService, Activity } from '../API.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {

  I18n = I18n;

  public activities: Array<Activity> = [];

  constructor(public api: APIService, private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.user_info_obs.subscribe(values => {

    this.api.ListActivities().then(value => {
      
        this.activities = value.items;

      });
      
    });
  }

}
