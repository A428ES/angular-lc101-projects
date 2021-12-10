import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Here are some Movie images';
  image1 = 'https://starwarsblog.starwars.com/wp-content/uploads/2021/11/star-wars-the-high-republic-exclusive-editions_TALL-38763.jpg';
  image2 = 'https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg';
  image3 = 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1565874716-51wharHn-3L.jpg';

  constructor() { }

  ngOnInit() {
  }

}