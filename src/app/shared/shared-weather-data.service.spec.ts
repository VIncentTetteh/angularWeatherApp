import { TestBed } from '@angular/core/testing';

import { SharedWeatherDataService } from './shared-weather-data.service';

describe('SharedWeatherDataService', () => {
  let service: SharedWeatherDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedWeatherDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
