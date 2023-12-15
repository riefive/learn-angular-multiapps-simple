import { TestBed } from '@angular/core/testing';

import { LibBeehiveUiSharedService } from './lib-beehive-ui-shared.service';

describe('LibBeehiveUiSharedService', () => {
  let service: LibBeehiveUiSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibBeehiveUiSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
