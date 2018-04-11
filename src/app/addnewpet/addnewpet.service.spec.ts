import { TestBed, inject } from '@angular/core/testing';

import { AddnewpetService } from './addnewpet.service';

describe('AddnewpetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddnewpetService]
    });
  });

  it('should be created', inject([AddnewpetService], (service: AddnewpetService) => {
    expect(service).toBeTruthy();
  }));
});
