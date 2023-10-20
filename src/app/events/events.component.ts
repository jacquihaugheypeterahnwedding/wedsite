import { Component } from '@angular/core';
import { APIService, Event } from '../API.service';

import { I18n } from 'aws-amplify';
import { UserService } from '../user.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  public events: Array<Event> = [];
  I18n = I18n;

  constructor(public api: APIService, private userService: UserService) {

  }

  ngOnInit(): void {
    this.api.ListEvents().then(value => {

      this.userService.user_info_obs.subscribe(values => {
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
      });





      
    });
  }

}
