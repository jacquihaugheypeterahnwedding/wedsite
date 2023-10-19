import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CognitoService } from './cognito.service';

import { Auth } from 'aws-amplify';

import { AuthenticatorService } from '@aws-amplify/ui-angular';

import { I18n } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  navLinks: any[];
  activeLinkIndex = -1; 

  text = I18n.get('Test String!');
  I18n = I18n;



  constructor(private route: ActivatedRoute, private router: Router, private cognitoService: CognitoService,public authenticator: AuthenticatorService) {
    this.navLinks = [
        {
            label: 'Welcome',
            link: './welcome',
            index: 0
        }, {
            label: 'Events',
            link: './events',
            index: 1
        }, {
            label: 'Lodging',
            link: './lodging',
            index: 2
        }, {
          label: 'Restaurants',
          link: './restaurants',
          index: 3
        }, {
          label: 'Our Story',
          link: './ourstory',
          index: 4
      }, {
        label: 'User',
        link: './user',
        index: 4
    }, 
    ];

    



  }




  ngOnInit(): void {

    this.cognitoService.getUSerGroups();

    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));

        
    });

    this.route.queryParams.subscribe(params => {
      if (this.authenticator.authStatus != 'authenticated') {
        if ('user' in params && 'pass' in params) {
          Auth.signIn(params['user'], params['pass']);
  
        }
      }
      
    });

 


  }


  switchLanguage() {
    console.log('switch')
    I18n.setLanguage('ko-KR');
    this.text = I18n.get('Test String!');
  }


  signOut() {
    Auth.signOut();
  }


}
