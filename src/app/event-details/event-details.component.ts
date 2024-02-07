import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { I18n } from 'aws-amplify';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {
  I18n = I18n;


  constructor(private route: ActivatedRoute, private router: Router) {
    const test =this.route.snapshot.paramMap.get("id");
    console.log(test);




  }
  

  @Input()
  set id(heroId: string) {
    console.log(heroId);
  }

}
