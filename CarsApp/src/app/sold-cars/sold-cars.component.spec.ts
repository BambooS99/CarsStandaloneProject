import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldCarsComponent } from './sold-cars.component';

describe('SoldCarsComponent', () => {
  let component: SoldCarsComponent;
  let fixture: ComponentFixture<SoldCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoldCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
