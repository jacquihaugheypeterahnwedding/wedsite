import { Component } from '@angular/core';
import { APIService, Picture } from '../API.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {


  images: any[] = [];

  constructor(public api: APIService) {


  }

  ngOnInit() {
    // Set items array
   
    this.api.ListPictures().then(value => {
      this.images = value.items as Picture[];
    });


/*
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

}
