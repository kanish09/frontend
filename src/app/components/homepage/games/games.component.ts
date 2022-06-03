import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  images = ['assets/images/bgmi/bgmi.png', 'assets/images/valorant/valorant.jpg', 'assets/images/comming_soon.jpg', 'assets/images/comming_soon.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}
