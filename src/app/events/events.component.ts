import { Component } from '@angular/core';
import { APIService, Event } from '../API.service';

import { I18n } from 'aws-amplify';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  public events: Array<Event> = [];
  I18n = I18n;

  constructor(public api: APIService) {

  }

  ngOnInit(): void {
    this.api.ListEvents().then(event => {
      this.events = event.items as Event[];
    });
  }

}
