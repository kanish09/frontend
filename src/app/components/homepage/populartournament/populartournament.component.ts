import { Component, OnInit } from '@angular/core';
import {Swiper} from 'swiper'
import * as $ from 'jquery'
@Component({
  selector: 'app-populartournament',
  templateUrl: './populartournament.component.html',
  styleUrls: ['./populartournament.component.css']
})
export class PopulartournamentComponent implements OnInit {
  images = ['assets/images/bgmi/bgmi.png', 'assets/images/valorant/valorant.jpg',  'assets/images/comming_soon.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}
