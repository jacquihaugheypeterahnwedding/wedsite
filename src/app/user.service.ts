import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Auth } from 'aws-amplify';
import { APIService, ListUserSettingsQuery, UserSettings } from './API.service';
import { CognitoService } from './cognito.service';
import { I18n } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  userSettings: Partial<UserSettings> = {};
  username: string = '';

  language: string = 'en-US';


  constructor(private api: APIService, private cognitoService: CognitoService) {

    console.log('csntruct')
    this.cognitoService.getUser().then(value => {
        console.log(value);
        const username = value.username;
        console.log(username);

        //this.userSettings = await this.api.ListUserSettings({user: {eq: username}});
    });

    this.setup();

    
  }

  async setup(): Promise<void> {
    this.username = (await this.cognitoService.getUser()).username;
    console.log(this.username);
    const settings: ListUserSettingsQuery = await this.api.ListUserSettings({user: {eq: this.username}});

    if (settings.items.length > 0) {
        this.userSettings = settings.items[0] as UserSettings;
        this.language = this.userSettings.language as string;
        I18n.setLanguage(this.userSettings.language);
    } else {
        this.api.CreateUserSettings({'user': this.username, 'language': 'en-US'});
    }


    
  }



}