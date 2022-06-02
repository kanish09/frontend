import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  images = ['assets/images/bgmi/bgmi.png', 'assets/images/valorant/valorant.jpg', 'assets/images/comming_soon.jpg', 'assets/images/comming_soon.jpg']
  constructor() { }

  ngOnInit(): void {
  }

}
