import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulartournamentComponent } from './populartournament.component';

describe('PopulartournamentComponent', () => {
  let component: PopulartournamentComponent;
  let fixture: ComponentFixture<PopulartournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulartournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulartournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
