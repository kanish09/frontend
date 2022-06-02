import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgmilistComponent } from './bgmilist.component';

describe('BgmilistComponent', () => {
  let component: BgmilistComponent;
  let fixture: ComponentFixture<BgmilistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgmilistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgmilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
