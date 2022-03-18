import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherImageAndTempConvertComponent } from './weather-image-and-temp-convert.component';

describe('WeatherImageAndTempConvertComponent', () => {
  let component: WeatherImageAndTempConvertComponent;
  let fixture: ComponentFixture<WeatherImageAndTempConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherImageAndTempConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherImageAndTempConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
