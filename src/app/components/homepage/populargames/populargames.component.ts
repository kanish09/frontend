import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-populargames',
  templateUrl: './populargames.component.html',
  styleUrls: ['./populargames.component.css']
})
export class PopulargamesComponent implements OnInit {
  images = 'assets/images/bgmi/bgmi.png'
  constructor() { }

  ngOnInit(): void {
  }

}
