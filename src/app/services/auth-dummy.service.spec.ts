import { TestBed } from '@angular/core/testing';

import { AuthDummyService } from './auth-dummy.service';

describe('AuthDummyService', () => {
  let service: AuthDummyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthDummyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
