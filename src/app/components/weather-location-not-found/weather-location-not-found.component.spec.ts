import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLocationNotFoundComponent } from './weather-location-not-found.component';

describe('WeatherLocationNotFoundComponent', () => {
  let component: WeatherLocationNotFoundComponent;
  let fixture: ComponentFixture<WeatherLocationNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherLocationNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLocationNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
