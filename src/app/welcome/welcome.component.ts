import { Component } from '@angular/core';
import { UserService } from '../user.service';

import { I18n } from 'aws-amplify';
import { APIService, Welcome } from '../API.service';
import {PageFlip} from 'page-flip';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  I18n = I18n;

  public pagesList: Array<Welcome> = [];

  constructor(public userService: UserService, public api: APIService) {

  }

  async ngOnInit() {

    this.api.ListWelcomes().then(value => {
      this.pagesList = value.items as Welcome[];
      this.pagesList.sort((a, b) =>  (a.footer > b.footer) ? 1 : -1);

      setTimeout(() => {
        const pageFlip = new PageFlip(
          document.getElementById("demoBookExample"),
          {
              width: 315, // base page width
              height: 420, // base page height
    
              size: "stretch",
              // set threshold values:
              minWidth: 315,
              maxWidth: 1000,
              minHeight: 420,
              maxHeight: 1350,
              autoSize: false,
              maxShadowOpacity: 0.5, // Half shadow intensity
              showCover: true,
              mobileScrollSupport: true // disable content scrolling on mobile devices
          }
        );
    
      // load pages
         pageFlip.loadFromHTML(document.querySelectorAll(".page"));
      }, 500);
      
    });
    

  }

}
