import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {
  


  constructor(private route: ActivatedRoute, private router: Router) {
    const test =this.route.snapshot.paramMap.get("id");
    console.log(test);




  }
  

  @Input()
  set id(heroId: string) {
    console.log(heroId);
  }

}
