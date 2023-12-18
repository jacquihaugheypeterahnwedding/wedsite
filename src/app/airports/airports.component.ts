import { Component } from '@angular/core';
import { APIService, Airport } from '../API.service';

import { I18n } from 'aws-amplify';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent {
  I18n = I18n;

  public airports: Array<Airport> = [];

  constructor(public api: APIService) {


  }


  ngOnInit(): void {
    this.api.ListAirports().then(value => {
      this.airports = value.items as Airport[];
    });
  }
}
