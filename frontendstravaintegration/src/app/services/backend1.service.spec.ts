import { TestBed } from '@angular/core/testing';

import { Backend1Service } from './backend1.service';

describe('Backend1Service', () => {
  let service: Backend1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Backend1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
