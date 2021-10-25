import { TestBed } from '@angular/core/testing';

import { ShowticketService } from './showticket.service';

describe('ShowticketService', () => {
  let service: ShowticketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowticketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
