import { Component } from '@angular/core';
import { APIService } from '../API.service';
import { UserService } from '../user.service';
import { CognitoService } from '../cognito.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent {

  display_name: string;
  message: string;
  show_invite = false;
  been_closed = false;
  hover = false;

  constructor(public api: APIService, public userService: UserService, private cognitoService: CognitoService) {


  }


  ngOnInit(): void {
    console.log('here');
    this.cognitoService.getUser().then(item => {
      console.timeLog(this.userService.username);
      console.log(item);  
      this.api.ListUsers({username: {eq: item.username}}).then(value => {
        console.log(value);
        this.display_name = value.items[0].display_name;
        this.message = value.items[0].message;
      });
    });


    
    


  }


  openInvite(): void {
    this.show_invite = true;
    this.been_closed = false;

    setTimeout(() => {
      if (!this.been_closed) {
        this.show_invite = false;
        this.been_closed = true;
      }
        
    }, 36000);
  }



  close(): void {
    this.show_invite = false;
    this.been_closed = true;
  }

}
