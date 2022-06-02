import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent implements OnInit {
  form = new FormGroup({
    tournamentName: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required])
  })
  constructor() { }
  get tournamentName() {
    return this.form.get('tournamentName');
  }
  get category() {
    return this.form.get('category');
  }
  get startDate() {
    return this.form.get('startDate');
  }
  get returnDate() {
    return this.form.get('returnDate');
  }
  ngOnInit(): void {
  }
  addTournament(value: any) {
    let tournament = value.value;
    console.log(tournament);
  }
}
