import { TestBed } from '@angular/core/testing';

import { TicmobService } from './ticmob.service';

describe('TicmobService', () => {
  let service: TicmobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicmobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
