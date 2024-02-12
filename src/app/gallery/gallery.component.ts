import { Component, HostListener, ViewChild } from '@angular/core';
import { APIService, Picture } from '../API.service';
import { I18n } from 'aws-amplify';
import {MediaChange, MediaObserver} from "@angular/flex-layout";
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  I18n = I18n;


  images: any[] = [];


      
columnNum = 1;
rowHeight = '100px';


  constructor(public api: APIService, public mediaObserver: MediaObserver) {

   

/*
    media.asObservable()
    .subscribe((change: MediaChange) => {
      // alert(change.mqAlias);  
      console.log(change.mqAlias);
      if(change.mqAlias == 'xs'){
        this.columnNum = 1;
      }
      else if(change.mqAlias == 'sm'){
        this.columnNum = 2;
      }
      else{
        this.columnNum = 3;
      }
    });
    */

  }

  ngOnInit() {
    // Set items array
   
    this.api.ListPictures().then(value => {
      this.images = value.items as Picture[];
    });

    this.mediaObserver.asObservable().pipe(
      map((change: MediaChange[]) => {
        console.log(change)
      })
    );
    this.onResize(null);


/*



Item image src
assets/engagement/308.jpg
Cols
2
Rows
1
Alt
eng 308
Frame src
../../assets/frames/pf.png
Frame cut
100
Frame repeat
round






    this.images = [
        
        {
          itemImageSrc: 'assets/engagement/303.jpg',
          thumbnailImageSrc: 'assets/engagement/303.jpg',
          alt: 'Description for Image 1',
          title: 'Title 2',
          width: 500,
          height: 500,
          cols: 1,
          rows: 1
        },
        {
          itemImageSrc: 'assets/engagement/308.jpg',
          thumbnailImageSrc: 'assets/engagement/308.jpg',
          alt: 'Description for Image 1',
          title: 'Title 3',
          width: 100,
          height: 500,
          cols: 1,
          rows: 3
        },
        {
          itemImageSrc: 'assets/engagement/322.jpg',
          thumbnailImageSrc: 'assets/engagement/322.jpg',
          alt: 'Description for Image 1',
          title: 'Title 3',
          width: 50,
          height: 50,
          cols: 1,
          rows: 2
        },
        {
          itemImageSrc: 'assets/engagement/360.jpg',
          thumbnailImageSrc: 'assets/engagement/360.jpg',
          alt: 'Description for Image 1',
          title: 'Title 3',
          width: 50,
          height: 50,
          cols: 1,
          rows: 1
        },
        {
          itemImageSrc: 'assets/engagement/371.jpg',
          thumbnailImageSrc: 'assets/engagement/371.jpg',
          alt: 'Description for Image 1',
          title: 'Title 3',
          width: 50,
          height: 50,
          cols: 1,
          rows: 3
        },
        {
          itemImageSrc: 'assets/engagement/DSC_4411.jpg',
          thumbnailImageSrc: 'assets/engagement/DSC_4411.jpg',
          alt: 'Description for Image 1',
          title: 'Title 3',
          width: 50,
          height: 50,
          cols: 1,
          rows: 1
        }
    ];
    */
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const width = window.innerWidth;
    if(width <= 200){
      this.columnNum = 2;
      this.rowHeight = '100px';
    }
    else if(width <= 400){
      this.columnNum = 2;
      this.rowHeight = '200px';
    }
    else if(width <= 600){
      this.columnNum = 3;
    }
    else if(width <= 800){
      this.columnNum = 4;
    }
    else{
      this.columnNum = 5;
    }
  }

}
