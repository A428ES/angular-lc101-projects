import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['http://launchcode.com', 'http://starwars.com', 'http://google.com'];

  constructor() { }

  ngOnInit() {
  }

}
