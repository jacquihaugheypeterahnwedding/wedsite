import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(public userService: UserService) {

  }

  async ngOnInit() {
    
  

  }



}
