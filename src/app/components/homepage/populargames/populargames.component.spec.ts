import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulargamesComponent } from './populargames.component';

describe('PopulargamesComponent', () => {
  let component: PopulargamesComponent;
  let fixture: ComponentFixture<PopulargamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulargamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulargamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
