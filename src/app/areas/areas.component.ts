import { Component } from '@angular/core';
import { APIService, Area } from '../API.service';

import { I18n } from 'aws-amplify';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent {

  I18n = I18n;

  public areas: Array<Area> = [];

  constructor(public api: APIService) {


  }


  ngOnInit(): void {
    this.api.ListAreas().then(value => {
      this.areas = value.items as Area[];
    });
  }

}
