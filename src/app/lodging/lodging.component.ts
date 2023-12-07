import { Component } from '@angular/core';
import { APIService, Hotel } from '../API.service';

import { I18n } from 'aws-amplify';

@Component({
  selector: 'app-lodging',
  templateUrl: './lodging.component.html',
  styleUrls: ['./lodging.component.css']
})
export class LodgingComponent {

  I18n = I18n;

  public hotels: Array<Hotel> = [];

  constructor(public api: APIService) {


  }


  ngOnInit(): void {
    this.api.ListHotels().then(value => {
      this.hotels = value.items as Hotel[];
    });
  }

  goToLink(link: any): void{
    window.open(link as string);
  }

}
