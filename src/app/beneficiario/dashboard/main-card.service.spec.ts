import { TestBed, inject } from '@angular/core/testing';

import { MainCardService } from './main-card.service';

describe('MainCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainCardService]
    });
  });

  it('should be created', inject([MainCardService], (service: MainCardService) => {
    expect(service).toBeTruthy();
  }));
});
