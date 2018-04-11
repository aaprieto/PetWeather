import { TestBed, inject } from '@angular/core/testing';

import { ListpetService } from './listpet.service';

describe('ListpetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListpetService]
    });
  });

  it('should be created', inject([ListpetService], (service: ListpetService) => {
    expect(service).toBeTruthy();
  }));
});
