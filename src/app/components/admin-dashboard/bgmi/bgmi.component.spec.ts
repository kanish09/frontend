import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgmiComponent } from './bgmi.component';

describe('BgmiComponent', () => {
  let component: BgmiComponent;
  let fixture: ComponentFixture<BgmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
