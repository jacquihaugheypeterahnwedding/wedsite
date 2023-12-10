import { Component } from '@angular/core';
import { APIService } from '../API.service';
import { UserService } from '../user.service';
import { CognitoService } from '../cognito.service';

import { MediaObserver } from '@angular/flex-layout';


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
  gif = new Image();
  img;
  closeTimer;

  constructor(public api: APIService, public userService: UserService, private cognitoService: CognitoService, public media: MediaObserver) {


  }


  ngOnInit(): void {
    this.cognitoService.getUser().then(item => {

      this.api.ListUsers({username: {eq: item.username}}).then(value => {

        this.display_name = value.items[0].display_name;
        this.message = value.items[0].message;
      });
    });

    this.img = document.getElementById("gif");


  }


  openInvite(): void {
    this.show_invite = true;
    const new_src = this.img.getAttribute('src');

    this.img.src  = "";

    this.img.src= new_src;
    this.img.style.display = "block";

    this.closeTimer = setTimeout(() => {

        this.close()
    }, 36000);
  }



  close(): void {
    this.show_invite = false;
    this.img.style.display = "none";
    clearTimeout(this.closeTimer);
  }

}
