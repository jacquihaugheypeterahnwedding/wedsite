import { Component } from '@angular/core';
import { APIService, Charity } from '../API.service';

import { I18n } from 'aws-amplify';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent {

  public charities: Array<Charity> = [];
  I18n = I18n;

  constructor(public api: APIService, private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.user_info_obs.subscribe(values => {

    this.api.ListCharities().then(value => {
      
        this.charities = value.items;

      });





      
    });
  }

}
