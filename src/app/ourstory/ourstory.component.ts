import { Component } from '@angular/core';
import {PageFlip} from 'page-flip';
import { APIService, Story } from '../API.service';

import { I18n } from 'aws-amplify';

@Component({
  selector: 'app-ourstory',
  templateUrl: './ourstory.component.html',
  styleUrls: ['./ourstory.component.scss']
})
export class OurstoryComponent {
  I18n = I18n;

  public pagesList: Array<Story> = [];

  constructor(public api: APIService) {


  }

  ngOnInit(): void {
    this.api.ListStories().then(value => {
      this.pagesList = value.items as Story[];
      console.log(this.pagesList);
      this.pagesList.sort((a, b) =>  (a.footer > b.footer) ? 1 : -1);

      setTimeout(() => {
        const pageFlip = new PageFlip(
          document.getElementById("demoBookExample"),
          {
              width: 315, // base page width
              height: 420, // base page height
    
              size: "stretch",
              // set threshold values:
              minWidth: 315,
              maxWidth: 1000,
              minHeight: 420,
              maxHeight: 1350,
              autoSize: false,
              maxShadowOpacity: 0.5, // Half shadow intensity
              showCover: true,
              mobileScrollSupport: true // disable content scrolling on mobile devices
          }
        );
    
      // load pages
         pageFlip.loadFromHTML(document.querySelectorAll(".page"));
      }, 500);
      
    });


   

/*
  document.querySelector(".page-total").innerText = pageFlip.getPageCount();
    document.querySelector(
        ".page-orientation"
    ).innerText = pageFlip.getOrientation();

    document.querySelector(".btn-prev").addEventListener("click", () => {
        pageFlip.flipPrev(); // Turn to the previous page (with animation)
    });

    document.querySelector(".btn-next").addEventListener("click", () => {
        pageFlip.flipNext(); // Turn to the next page (with animation)
    });

    // triggered by page turning
    pageFlip.on("flip", (e) => {
        document.querySelector(".page-current").innerText = e.data + 1;
    });

    // triggered when the state of the book changes
    pageFlip.on("changeState", (e) => {
        document.querySelector(".page-state").innerText = e.data;
    });

    // triggered when page orientation changes
    pageFlip.on("changeOrientation", (e) => {
        document.querySelector(".page-orientation").innerText = e.data;
    });
*/

/*
    // triggered by page turning
pageFlip.on("flip", (e) => {
  document.querySelector(".page-current").innerText = e.data + 1;
});
// triggered when the state of the book changes
pageFlip.on("changeState", (e) => {
  // ("user_fold", "fold_corner", "flipping", "read")
});
// triggered when page orientation changes
pageFlip.on("changeOrientation", (e) => {
  // ("portrait", "landscape")
});
// triggered when the book is init and the start page is loaded
pageFlip.on("init", (e) => {
  ({page: number, mode: 'portrait', 'landscape'})
});
// triggered when the book pages are updated
pageFlip.on("update", (e) => {
  // ({page: number, mode: 'portrait', 'landscape'})
});

*/

  }

}
