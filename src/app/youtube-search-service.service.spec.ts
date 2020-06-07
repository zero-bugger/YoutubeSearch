import { TestBed } from '@angular/core/testing';

import { YoutubeSearchServiceService } from './youtube-search-service.service';

describe('YoutubeSearchServiceService', () => {
  let service: YoutubeSearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeSearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
