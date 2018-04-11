import { TestBed, inject } from '@angular/core/testing';

import { ViewpetService } from './viewpet.service';

describe('ViewpetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewpetService]
    });
  });

  it('should be created', inject([ViewpetService], (service: ViewpetService) => {
    expect(service).toBeTruthy();
  }));
});
