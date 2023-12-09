import { Component } from '@angular/core';

import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  images: ImageItem[] = [];

  images1: any[] = [];

  responsiveOptions: any[] | undefined;

  ngOnInit() {
    // Set items array
    this.images = [
      new ImageItem({ src: 'assets/engagement/268.jpg', thumb: 'assets/engagement/268.jpg' }),
      new ImageItem({ src: 'assets/engagement/303.jpg', thumb: 'assets/engagement/303.jpg' }),
      new ImageItem({ src: 'assets/engagement/308.jpg', thumb: 'assets/engagement/308.jpg' }),
    ];

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];




    this.images1 = [
        
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
    ]
  }

}
