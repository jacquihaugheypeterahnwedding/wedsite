import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Auth } from 'aws-amplify';
import { APIService, ListUserSettingsQuery, UserSettings, User, ListUsersQuery, CreateLoginInput } from './API.service';
import { CognitoService } from './cognito.service';
import { I18n } from 'aws-amplify';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  userSettings: Partial<UserSettings> = {};
  userInfo: Partial<User> = {};
  username: string = 'unknown';

  language: string = 'en-US';

  user_info_obs = new ReplaySubject();
  user_obs = new ReplaySubject();


  constructor(private api: APIService, private cognitoService: CognitoService) {

    this.cognitoService.getUser().then(value => {
        this.username = value.username;



        const login: CreateLoginInput = {
          username: this.username,
          login: (new Date()).toString()
        }
    
        this.api.CreateLogin(login);
        this.user_obs.next(null);

        this.api.ListUserSettings({user: {eq: this.username}}).then(settings => {
          if (settings.items.length > 0) {
              this.userSettings = settings.items[0] as UserSettings;
              this.language = this.userSettings.language as string;
              I18n.setLanguage(this.userSettings.language);
          } else {
              this.api.CreateUserSettings({'user': this.username, 'language': 'en-US'});
          }
        });


        this.api.ListUsers({username: {eq: this.username}}).then(info => {
          if (info.items.length > 0) {
            this.userInfo = info.items[0] as User;
          }
          this.user_info_obs.next(null);
        });


         
        



    });


    
  }



}