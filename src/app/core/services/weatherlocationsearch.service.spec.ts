import { TestBed, inject } from '@angular/core/testing';

import { WeatherlocationsearchService } from './weatherlocationsearch.service';

describe('WeatherlocationsearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherlocationsearchService]
    });
  });

  it('should be created', inject([WeatherlocationsearchService], (service: WeatherlocationsearchService) => {
    expect(service).toBeTruthy();
  }));
});
