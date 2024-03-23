import { Component } from '@angular/core';
import { PrimeIcons } from "primeng/api";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  gfg: any[];
     
    ngOnInit() {
        this.gfg = [
            {
                title: "Cocktail Hour",
                time: '2:30pm',
                description: '',
                icon: 'local_bar',
                color: "#9C27B0",
            },
            {
              title: "Ceremony",
              time: '3:30pm',
              description: '',
              icon: 'favorite',
              color: "#9C27B0",
            },
            {
              title: "Social Time",
              time: '4:20pm',
              description: '',
              icon: 'wine_bar',
              color: "#9C27B0",
            },
            {
              title: "Paebaek (Adapted)",
              time: '4:45pm',
              description: '',
              icon: 'handshake',
              color: "#9C27B0",
            },
            {
              title: "Dinner Stations Open",
              time: '5:00pm',
              description: '',
              icon: 'dinner_dining',
              color: "#9C27B0",
            },
            {
              title: "Toasts",
              time: '6:15pm',
              description: '',
              icon: 'mic',
              color: "#9C27B0",
            },
            {
              title: "Cake Cutting",
              time: '6:30pm',
              description: '',
              icon: 'cake',
              color: "#9C27B0",
            },
            {
              title: "Group Photo",
              time: '6:45pm',
              description: '',
              icon: 'photo_camera',
              color: "#9C27B0",
            },
            {
              title: "Dancing",
              time: '6:55pm',
              description: '',
              icon: 'music_note',
              color: "#9C27B0",
            },
            {
              title: "Bridal Getaway",
              time: '9:30pm',
              description: '',
              icon: 'directions_car',
              color: "#9C27B0",
            }
        ];
    }
}
