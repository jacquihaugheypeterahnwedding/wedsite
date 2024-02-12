import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Auth } from 'aws-amplify';
import { APIService, ListUserSettingsQuery, UserSettings, User, ListUsersQuery, CreateLoginInput } from './API.service';
import { CognitoService } from './cognito.service';
import { I18n } from 'aws-amplify';
import { Observable, ReplaySubject } from 'rxjs';
import { Hub } from 'aws-amplify';

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
      console.log('cognito');
      console.log(value);
      if (value) {
        this.username = value.username;
        this.start();
      }
        


    });



    const listener = (data) => {
      switch (data?.payload?.event) {
        case 'signIn':
          console.log('user signed in');
          console.log(data.payload.data.username);
          this.username = data.payload.data.username;
          this.start();
          break;
        
        default:
          console.log('unknown event type');
          break;
      }
    };

    Hub.listen('auth', listener);


    
  }



  start() {
    
    console.log('statr here');


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
  }



}